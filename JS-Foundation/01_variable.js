/*Datatypes in JavaScript, Primitive Data Types, Reference (Non-Primitive) Data Types, Variables in
JavaScript, var keyword, let keyword, const keyword, Constants and Reassignment,
Scope (Block Scope and Function Scope), Hoisting, Temporal Dead Zone, Dynamic Typing, 
Type Checking using typeof, Primitive vs Reference Behavior, Objects and Arrays, Functions
as Data Types, Best Practices for Variable Declarations
*/

var name = "Tufail";
console.log(name);

name = "Ahmed";
console.log(name);

let obj1 = { value: 10 };
//console.log(obj1.value);
let obj2 = obj1;
//console.log(obj1.value);
obj2.value = 20;
console.log(obj1.value);

// objects typedata arrays and dictionaries

let arr = [1, 2, 3, 4];
let dict = { name: "Tufail", rollno: "22SW071" };

for (names in arr) {
  console.log(names);
}

// Nodes js printing method
process.stdout.write("Hello World");
process.stdout.write("Hello World");
