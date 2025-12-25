# 📖 JavaScript Cheatsheet - Referensi Lengkap

## 📝 Variables

```javascript
let name = "John";      // Can be reassigned
const age = 25;         // Cannot be reassigned
var old = "legacy";     // Avoid (function scope)
```

## 🔢 Data Types

```javascript
// Primitives
let str = "text";           // String
let num = 42;               // Number
let bool = true;            // Boolean
let undef = undefined;      // Undefined
let nul = null;             // Null
let sym = Symbol("id");     // Symbol
let bigInt = 123n;          // BigInt

// Objects
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function() {};
```

## ➕ Operators

```javascript
// Arithmetic
+ - * / % **

// Assignment
= += -= *= /= %=

// Comparison
== === != !== > < >= <=

// Logical
&& || !

// Ternary
condition ? true : false

// Nullish coalescing
value ?? defaultValue
```

## 🔤 String Methods

```javascript
let str = "Hello World";

str.length              // 11
str.toLowerCase()       // "hello world"
str.toUpperCase()       // "HELLO WORLD"
str.trim()              // Remove whitespace
str.slice(0, 5)         // "Hello"
str.substring(6, 11)    // "World"
str.replace("World", "JS") // "Hello JS"
str.split(" ")          // ["Hello", "World"]
str.includes("World")   // true
str.startsWith("Hello") // true
str.endsWith("World")   // true
str.charAt(0)           // "H"
str.indexOf("o")        // 4
str.repeat(2)           // "Hello WorldHello World"
```

## 🔢 Number Methods

```javascript
let num = 3.14159;

num.toFixed(2)          // "3.14"
num.toPrecision(4)      // "3.142"
num.toString()          // "3.14159"
parseInt("42")          // 42
parseFloat("3.14")      // 3.14
Number("42")            // 42
isNaN(value)            // Check if NaN
Math.round(3.6)         // 4
Math.ceil(3.1)          // 4
Math.floor(3.9)         // 3
Math.random()           // 0-1
Math.max(1,2,3)         // 3
Math.min(1,2,3)         // 1
```

## 📚 Array Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// Add/Remove
arr.push(6)             // Add to end
arr.pop()               // Remove from end
arr.unshift(0)          // Add to start
arr.shift()             // Remove from start
arr.splice(2, 1)        // Remove at index
arr.splice(2, 0, 'x')   // Insert at index

// Transform
arr.map(x => x * 2)     // [2,4,6,8,10]
arr.filter(x => x > 2)  // [3,4,5]
arr.reduce((sum,x) => sum+x, 0)  // 15
arr.find(x => x > 3)    // 4
arr.findIndex(x => x > 3) // 3
arr.some(x => x > 4)    // true
arr.every(x => x > 0)   // true

// Others
arr.forEach(x => console.log(x))
arr.join(", ")          // "1, 2, 3, 4, 5"
arr.reverse()           // [5,4,3,2,1]
arr.sort()              // Sort alphabetically
arr.slice(1, 3)         // [2, 3]
arr.includes(3)         // true
arr.indexOf(3)          // 2
Array.from("123")       // ['1','2','3']
Array.isArray(arr)      // true
```

## 🎯 Object Methods

```javascript
let obj = { a: 1, b:2, c: 3 };

Object.keys(obj)        // ['a','b','c']
Object.values(obj)      // [1, 2, 3]
Object.entries(obj)     // [['a',1],['b',2],['c',3]]
Object.assign({}, obj)  // Shallow copy
{ ...obj }              // Spread operator copy

// Destructuring
const { a, b } = obj;   // a=1, b=2
const { a: x } = obj;   // Rename: x=1
```

## 🔄 Control Flow

```javascript
// If-else
if (condition) {
    // code
} else if (other) {
    // code
} else {
    // code
}

// Switch
switch(value) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

// Ternary
let result = condition ? value1 : value2;
```

## 🔁 Loops

```javascript
// For
for (let i = 0; i < 5; i++) {}

// For...of (values)
for (let item of array) {}

// For...in (keys)
for (let key in object) {}

// While
while (condition) {}

// Do-while
do {} while (condition);

// forEach
array.forEach((item, index) => {});
```

## 🎯 Functions

```javascript
// Function declaration
function greet(name) {
    return `Hello ${name}`;
}

// Function expression
const greet = function(name) {
    return `Hello ${name}`;
};

// Arrow function
const greet = (name) => `Hello ${name}`;
const greet = name => `Hello ${name}`; // Single param
const greet = () => "Hello";           // No params

// Default parameters
function greet(name = "Guest") {}

// Rest parameters
function sum(...numbers) {}

// Destructuring
function greet({name, age}) {}
```

## ⚡ ES6+ Features

```javascript
// Template literals
`Hello ${name}!`

// Destructuring
const [a, b] = [1, 2];
const {x, y} = obj;

// Spread operator
[...arr1, ...arr2]
{...obj1, ...obj2}

// Default values
const {x = 10} = obj;

// Arrow functions
const fn = () => {}

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {}
}

// Modules
export default MyClass;
export { func1, func2 };
import MyClass from './file';
import { func1 } from './file';
```

## 🌐 DOM Methods

```javascript
// Select
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('div')
document.getElementsByClassName('class')
document.getElementsByTagName('div')

// Create/Modify
const el = document.createElement('div')
el.textContent = 'Text'
el.innerHTML = '<p>HTML</p>'
el.setAttribute('class', 'box')
el.classList.add('active')
el.classList.remove('hidden')
el.classList.toggle('open')
el.style.color = 'red'

// Add/Remove
parent.appendChild(child)
parent.removeChild(child)
parent.insertBefore(new, ref)

// Events
el.addEventListener('click', handler)
el.removeEventListener('click', handler)
```

## ⏰ Async/Await

```javascript
// Promise
const promise = new Promise((resolve, reject) => {
    if (success) resolve(data);
    else reject(error);
});

promise
    .then(data => {})
    .catch(error => {})
    .finally(() => {});

// Async/Await
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

## 🌐 Fetch API

```javascript
// GET
const response = await fetch(url);
const data = await response.json();

// POST
const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
});
```

## 💾 LocalStorage

```javascript
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()

// Store objects
localStorage.setItem('user', JSON.stringify(obj))
JSON.parse(localStorage.getItem('user'))
```

## ⏱️ Timers

```javascript
setTimeout(() => {}, 1000)  // Once after delay
setInterval(() => {}, 1000) // Repeat every interval
clearTimeout(id)
clearInterval(id)
```

## 🔧 Common Patterns

```javascript
// Debounce
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// Check type
typeof value
Array.isArray(value)
value instanceof ClassName
```
