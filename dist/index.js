"use strict";
// cú pháp khai báo mảng
// Cách 1: Đơn giản hơn, khuyên dùng
const fruits = ["Cam", "Quyết", "Mít"];
// Cách 2: Phức tạp hơn, không khuyên dùng
const users = ["Khải", "Tuyến"];
// Khai báo mảng tích hợp nhiều kiểu dữ liệu khác nhau
const products = ["Xà phòng", 1, true]; // Sử dụng tương tự như JS
// Khai báo một mảng có từ khóa readonly(chỉ đọc)
const books = ["Tiếng Việt 1"];
// books.push("Tiếng Việt 2"); ==> Không thể push vào được
// Giải pháp
const newBook = [...books, "Tiếng Việt 2", "Tiếng Việt 3"];
console.log("newBook ===>", newBook);
console.log(fruits);
console.log(users);
console.log(products);
console.log(books);
// Kiểu dữ liệu tuple
// Là kiểu dữ liệu có độ dài được fixed sắn khi chúng ta mới khởi tạo
const tuples = ["ADMIN", 1];
tuples.push("USER");
console.log("Mảng sử dụng kiể tuple ", tuples);
// Kiểu dữ liệu enum
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
    Roles[Roles["CUSTOMER"] = 2] = "CUSTOMER";
})(Roles || (Roles = {}));
let person = {
    name: "admin",
    age: 21,
    role: 1,
};
console.log("Vai trò: ", person);
// Union type
// Có thể khai báo một biến mà có thể có nhiều kiểu dữ liệu khác nhau
const userName = true;
console.log("username ", userName);
// Bài toán: Viết một hàm nhập vào hai số a và b. Nếu a và b là số thì tiến hành cộng hai số
// nếu a và b là chuỗi thì tiến hành nối chuỗi
const myFunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
console.log("Tổng của hai số", typeof myFunction(2, "6"));
// Kiểu inference (Kiểu suy luận)
let numberC = 10; // number
let myString = "Nguyễn Văn A"; // string
let isTrue = true; // boolean
const listGender = [];
const male = {
    id: 1,
    title: "Male",
};
const feMale = {
    id: 2,
    title: "Female",
};
const other = {
    id: 3,
    title: "Other",
};
listGender.push(male, feMale, other);
console.log("list gender ", listGender);
// Kiểu dữ liệu asertion
let code = 123;
let employeeCode = code;
console.log("Kiểu dữ liệu ", typeof code);
// Bài 1:
const countAge = (yearBorn) => {
    // Lấy năm hiện tại
    let yearNow = new Date().getFullYear();
    return yearNow - yearBorn;
};
// const yearOfBirth = Number(prompt("Nhập năm sinh của bạn: "));
// console.log("Tuổi hiện tại của bạn là: ", countAge(yearOfBirth));
// Bài 7:
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["CUSTOMER"] = 2] = "CUSTOMER";
})(Role || (Role = {}));
const listUser = [];
// Hàm lấy thông tin
const getData = () => {
    let user_id = Number(prompt("Nhập id: "));
    let user_name = String(prompt("Nhập tên:"));
    let age = Number(prompt("Nhập tuổi:"));
    let role = Number(prompt("Nhập quyền:"));
    // Tạo đối tượng user
    const newUser = {
        user_id: user_id,
        user_name: user_name,
        age: age,
        role: role,
    };
    // push dữ liệu vào trong mảng
    listUser.push(newUser);
};
// Hàm in thông tin
const getUser = () => {
    console.log("Danh sách user: ", listUser);
};
// Khai báo biến option
let option;
// do-while
do {
    option = Number(prompt("Mời bạn nhập lựa chọn: (1. Nhập thông tin, 2. In thông tin, 3. Thoát chương trình)"));
    switch (option) {
        case 1:
            getData();
            break;
        case 2:
            getUser();
            break;
        default:
            break;
    }
} while (option === 1 || option === 2);
