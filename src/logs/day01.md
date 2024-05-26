### 1. Variables

Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

#### Example:

````javascript
// Using var
var name = "Alice";
console.log(name); // Output: Alice

// Using let
let age = 30;
console.log(age); // Output: 30

// Using const
const PI = 3.14159;
console.log(PI); // Output: 3.14159


### 2. Data Types

JavaScript supports several data types including:

- **String**: Textual data
- **Number**: Numeric data
- **Boolean**: True or false
- **Object**: Collection of key-value pairs
- **Array**: Ordered list of values
- **Undefined**: A variable that has been declared but not assigned a value
- **Null**: Represents the intentional absence of any object value

#### Example:
```javascript
// String
let firstName = "John";
console.log(typeof firstName); // Output: string

// Number
let score = 100;
console.log(typeof score); // Output: number

// Boolean
let isActive = true;
console.log(typeof isActive); // Output: boolean

// Object
let person = {
  name: "Alice",
  age: 30
};
console.log(typeof person); // Output: object

// Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(typeof fruits); // Output: object (arrays are a type of object)

// Undefined
let x;
console.log(typeof x); // Output: undefined

// Null
let y = null;
console.log(typeof y); // Output: object (this is a known quirk in JavaScript)
````

### 3. Operators

JavaScript includes a variety of operators:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`

#### Example:

```javascript
// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Output: 13
console.log(a - b); // Output: 7
console.log(a * b); // Output: 30
console.log(a / b); // Output: 3.3333333333333335
console.log(a % b); // Output: 1

// Assignment Operators
let c = 5;
c += 3; // Equivalent to c = c + 3
console.log(c); // Output: 8

c -= 2; // Equivalent to c = c - 2
console.log(c); // Output: 6

// Comparison Operators
console.log(a == b); // Output: false (equality, type-coercion)
console.log(a === b); // Output: false (strict equality, no type-coercion)
console.log(a != b); // Output: true (inequality, type-coercion)
console.log(a !== b); // Output: true (strict inequality, no type-coercion)
console.log(a > b); // Output: true
console.log(a < b); // Output: false

// Logical Operators
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Output: false (AND)
console.log(isTrue || isFalse); // Output: true (OR)
console.log(!isTrue); // Output: false (NOT)
```
