// Operators - Primitives - Non Primitives
let add = 2 + 2;
let subtract = 5 - 4;
let multiple = 5 * 4;
let divide = 20 / 4;
let expo = 2 ** 2;

let score = 52;
score++;
++score;

// Comparison Operators == , != ,

let num1 = 3;
let num2 = 4;

//console.log(num1 == num2);

// logical Operators && - || - !(reverse)

// assign += , -=

// Operators Precedance 2 ** 4 + 6 / (2 - 6)

// Handling and Processing the data

// Primitive (string number null undefined Boolean)
// Non Primitive(object(function , arrays , objects))
// typeof new keyword(let balance = new Balance => typeof)

let name = "Tufail";
let fullname = name + " " + "Ahmed";
console.log(fullname);

console.log("Hello + ${fullname}");
console.log(`Hello + ${fullname}`);
console.log("Hello + ${fullname}");

// Symbol -> Uniquness
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);

// Objects
let usernames = {
  firstname: "Tufail",
  rollno: "22SW071",
};

console.log(typeof usernames);

let arr = [1, 2, 3, 4];
console.log(typeof arr);

// Here whole variable will consider as constant
const first_name = "Tufail";

// Where as in non primitive the outer is constant but inner datatype can be changed in memory point of view
const username = {
  first_name: "Tufail Ahmed",
  last_name: "Sangrasi",
  // Here first_name and last_name can be changed but username is reserve memory cant change
};

first_name = "Tofique Ahmed";
console.log(username.first_name);

console.log(username["first_name"]); // Ye kese huwa?

let today = new Date();
console.log(today.getDate());

// Implicit conversions and Nan his type is number
console.log("2" + 2);
let islog = true;
console.log(islog + "2");
