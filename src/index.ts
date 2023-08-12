// cú pháp khai báo mảng

// Cách 1: Đơn giản hơn, khuyên dùng
const fruits: string[] = ["Cam", "Quyết", "Mít"];

// Cách 2: Phức tạp hơn, không khuyên dùng
const users: Array<string> = ["Khải", "Tuyến"];

// Khai báo mảng tích hợp nhiều kiểu dữ liệu khác nhau
const products: (string | number | boolean)[] = ["Xà phòng", 1, true]; // Sử dụng tương tự như JS

// Khai báo một mảng có từ khóa readonly(chỉ đọc)
const books: readonly string[] = ["Tiếng Việt 1"];
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
const tuples: [string, number] = ["ADMIN", 1];
tuples.push("USER");
console.log("Mảng sử dụng kiể tuple ", tuples);

// Kiểu dữ liệu enum
enum Roles {
  "ADMIN",
  "USER",
  "CUSTOMER",
}

let person: {
  name: string;
  age: number;
  role: Roles.USER;
} = {
  name: "admin",
  age: 21,
  role: 1,
};

console.log("Vai trò: ", person);

// Union type
// Có thể khai báo một biến mà có thể có nhiều kiểu dữ liệu khác nhau
const userName: string | number | boolean = true;
console.log("username ", userName);

// Bài toán: Viết một hàm nhập vào hai số a và b. Nếu a và b là số thì tiến hành cộng hai số
// nếu a và b là chuỗi thì tiến hành nối chuỗi
const myFunction = (
  a: string | number,
  b: string | number
): string | number => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return String(a) + String(b);
  }
};

console.log("Tổng của hai số", typeof myFunction(2, "6"));

// Kiểu inference (Kiểu suy luận)
let numberC = 10; // number
let myString = "Nguyễn Văn A"; // string
let isTrue = true; // boolean

// Kiểu dữ liệu alias
//  Sử dụng hai từ khóa type/interface
type Gender = {
  id: number;
  title: string;
};

const listGender: Gender[] = [];

const male: Gender = {
  id: 1,
  title: "Male",
};

const feMale: Gender = {
  id: 2,
  title: "Female",
};

const other: Gender = {
  id: 3,
  title: "Other",
};

listGender.push(male, feMale, other);

console.log("list gender ", listGender);

// Kiểu dữ liệu asertion
let code: any = 123;
let employeeCode = <boolean>code;
console.log("Kiểu dữ liệu ", typeof code);

// Bài 1:
const countAge = (yearBorn: number): number => {
  // Lấy năm hiện tại
  let yearNow = new Date().getFullYear();
  return yearNow - yearBorn;
};

// const yearOfBirth = Number(prompt("Nhập năm sinh của bạn: "));

// console.log("Tuổi hiện tại của bạn là: ", countAge(yearOfBirth));

// Bài 7:

enum Role {
  "ADMIN",
  "USER",
  "CUSTOMER",
}

type User = {
  user_id: number;
  user_name: string;
  age: number;
  role: Role.ADMIN | Role.USER | Role.CUSTOMER;
};

const listUser: User[] = [];

// Hàm lấy thông tin
const getData = () => {
  let user_id = Number(prompt("Nhập id: "));
  let user_name = String(prompt("Nhập tên:"));
  let age = Number(prompt("Nhập tuổi:"));
  let role = Number(prompt("Nhập quyền:"));

  // Tạo đối tượng user
  const newUser: User = {
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
  option = Number(
    prompt(
      "Mời bạn nhập lựa chọn: (1. Nhập thông tin, 2. In thông tin, 3. Thoát chương trình)"
    )
  );
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
