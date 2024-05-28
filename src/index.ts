// 1. Variables
let myName = "Nitesh";
let age = 30;
const PI = 3.14159;

console.log(myName); // Output: Nitesh
console.log(age); // Output: 30
console.log(PI); // Output: 3.14159

// 2. Data Types
let firstName = "John";
let score = 100;
let isActive = true;

let person = {
  name: "Alice",
  age: 30,
};

let fruits = ["Apple", "Banana", "Cherry"];

let x;
let y = null;

console.log(typeof firstName); // Output: string
console.log(typeof score); // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof person); // Output: object
console.log(typeof fruits); // Output: object
console.log(typeof x); // Output: undefined
console.log(typeof y); // Output: object (quirk in JavaScript)

// 3. Operators
let a = 10;
let b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.3333333333333335
console.log(a % b); // Output: 1

let c = 5;
c += 3;
console.log(c); // Output: 8

c -= 2;
console.log(c); // Output: 6

console.log(a == b); // Output: false (equality, type-coercion)
console.log(a === b); // Output: false (strict equality, no type-coercion)
console.log(a != b); // Output: true (inequality, type-coercion)
console.log(a !== b); // Output: true (strict inequality, no type-coercion)
console.log(a > b); // Output: true
console.log(a < b); // Output: false

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Output: false (AND)
console.log(isTrue || isFalse); // Output: true (OR)
console.log(!isTrue); // Output: false (NOT)
