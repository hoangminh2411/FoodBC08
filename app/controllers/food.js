import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"

let menu = new Menu;
//Lấy dữ liệu từ localstorage
menu.layStorage();
//Định nghĩa sự kiện cho nút btnThemMon
document.querySelector('#btnThemMon').onclick = () => {
    //Tạo đối tượng chứa thông tin người dùng nhập từ giao diện
    let monAn = new MonAn();
    //Truy xuất đến tất cả các input,select, textarea để lấy thông tin người dùng nhập từ giao diện
    let arrTagInput = document.querySelectorAll('form input,form select, form textarea');

    /* Cách 1 
    for(let i=0; i< arrTagInput.length; i++){
        let input = arrTagInput[i];
    }

    */
    for (let input of arrTagInput) {
        //Mỗi lần duyệt 1 taginput lấy ra name và value
        let { name, value } = input;
        //Gán giá trị value dựa vào name(thuộc tính) cho object món ăn
        monAn[name] = value;
        //console.log(name,value);
    }
    console.log('arrTagInput', arrTagInput);
    console.log('monAn', monAn);
    // Hiển thị thông tin lên giao diện
   // var arrTagOutput = document.querySelectorAll('.list-group-item span , .list-group-item p'); // Các thẻ span và p ảnh hưởng bởi selector này


    // Cách 1 dùng querySelectorAll + name
    // for (let tag of arrTagOutput) {
    //     // Đối với 1 số thẻ không có thuộc tính dom mà ta thêm thẻ vào mà ta thêm vào để lấy giá trị trên thẻ ta dùng phương thức getAttribute
    //     let  name  = tag.getAttribute('name');
    //     if (name === "giaSauKhuyenMai") {
    //         tag.innerHTML = monAn.tinhGiaKhuyenMai();
    //     } else if (name === 'loaiMon') {
    //         // Toán tử ba ngôi
    //         tag.innerHTML = monAn[name] === 'loai1' ? 'Chay' : 'Mặn';


    //     } else if (name === 'tinhTrang') {
    //         tag.innerHTML = monAn[name] == '0' ? 'Hết' : 'Còn';
    //     }
    //     else {
    //         tag.innerHTML = monAn[name];
    //     }

    // }

    // document.querySelector('#imgMonAn').src = monAn['hinhAnh'];




    // Cách 2: Dùng oop
    document.querySelector('.noiDungHienThi').innerHTML = monAn.hienThiThongTin();


    // Them mon an
    //menu.arrMonAn.push(monAn);
    menu.themMonAn(monAn);
     menu.luuStorage();
    
    //localStorage.setItem('danhSachMonAn', JSON.stringify(arrMonAn));

}

// let sinhVien = {ma:1,ten:'A'};
// sinhVien.ten='B';
// sinhVien['ten'] = 'B'; ok
// sinhVien = {...sinhVien,ten:'B'}
// sinhVien = {...sinhVien,['ten']:'B'}ok


// arrMonAn = [];
// monAn = {}