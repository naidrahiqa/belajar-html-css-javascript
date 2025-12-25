/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: JS MODERN (ES6 / ECMAScript 2015+)
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. Let & Const (Review)
2. Arrow Functions (Sintaks fungsi modern)
3. Classes (OOP di JS)
4. Promises & Async/Await (Handling asynchronous)
5. Modules (Import/Export)
6. JSON (Format data)
*/


/* ═══════════════════════════════════════════════
   1. ARROW FUNCTIONS
   ═══════════════════════════════════════════════ */

// FUNGSI LAMA (Regular Function)
// function hello() { return "Hello"; }

// ARROW FUNCTION
// Sintaks lebih pendek. "this" binding berbeda (lexical).

// 1. Basic Syntax
const hello = () => {
    return "Hello World!";
}

// 2. Shorthand (Jika cuma 1 statement return)
const simpleHello = () => "Hello World!"; // Return otomatis implisit

// 3. Parameters
const add = (x, y) => x + y; // Menerima x dan y, return hasil jumlah

// 4. One Parameter (Boleh tanpa kurung)
const greet = name => "Hello " + name;

/* KAPAN PAKAI?
- Callback functions (map, filter, reduce) -> Sangat bersih!
- Method sederhana
*/


/* ═══════════════════════════════════════════════
   2. CLASSES (OOP)
   ═══════════════════════════════════════════════ */

/* 
Class adalah template untuk membuat Object.
Sebelum ES6, JS menggunakan "Prototype chaining" yang ribet.
Class membuat syntax OOP di JS mirip Java/C#/PHP.
*/

class Car {
    // Constructor: Method spesial yang jalan saat object dibuat (new Car)
    constructor(name, year) {
        this.name = name; // Property
        this.year = year;
    }

    // Method (Fungsi milik class)
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

// Cara Penggunaan:
let myCar = new Car("Ford", 2014); // Membuat Instance (Object nyata) dari Class Car
console.log(myCar.name); // "Ford"
console.log(myCar.age()); // Hitung umur mobil


/* ═══════════════════════════════════════════════
   3. PROMISES & ASYNC/AWAIT
   ═══════════════════════════════════════════════ */

/* 
ASYNCHRONOUS PROGRAMMING
JS itu "Single Threaded" (hanya bisa kerjakan 1 hal dalam 1 waktu).
Tapi operasi seperti fetch data dari server butuh waktu lama.
Kita tidak mau browser "hang" menunggu server.
Maka kita pakai Async.
*/

// A. PROMISE (Janji)
// Object yang mewakili keberhasilan/kegagalan sebuah proses async.

const myPromise = new Promise(function (resolve, reject) {
    // Simulasi proses lama (3 detik)
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve("I love You !!"); // Jika SUKSES
        } else {
            reject("Error happened"); // Jika GAGAL
        }
    }, 3000);
});

// Cara Konsumsi Promise (Old School .then)
myPromise.then(
    function (value) { console.log(value); }, // On Success
    function (error) { console.log(error); }  // On Error
);


// B. ASYNC / AWAIT (Modern & Recommended)
// Cara menulis kode async tapi terlihat seperti kode synchronous (berurutan).
// Lebih mudah dibaca dan di-debug.

async function myDisplay() {
    try {
        // await = "Tunggu sampai promise selesai dulu, baru lanjut baris bawah"
        let response = await myPromise;
        console.log("Success: " + response);
    } catch (error) {
        // Tangkap error jika reject
        console.log("Failed: " + error);
    }
}
// myDisplay();


/* ═══════════════════════════════════════════════
   4. MODULES (IMPORT / EXPORT)
   ═══════════════════════════════════════════════ */

/* 
Modules memecah kode JS kita ke banyak file kecil biar rapi.
Butuh server (Live Server) agar jalan (karena alasan keamanan browser - CORS).
Script tag di HTML harus: <script type="module" src="..."></script>
*/

// File: person.js
// export const name = "Jesse";
// export const age = 40;

// File: main.js
// import { name, age } from "./person.js";


/* ═══════════════════════════════════════════════
   5. JSON (JavaScript Object Notation)
   ═══════════════════════════════════════════════ */

/* 
Format text standar untuk pertukaran data Web (Client <-> Server).
Bentuknya String, tapi strukturnya mirip Object JS.
*/

// JSON Format (String)
let jsonText = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

// 1. JSON.parse() : String JSON -> Object JS
// Dipakai saat menerima data dari Server
const obj = JSON.parse(jsonText);
console.log(obj.employees[0].firstName); // "John"

// 2. JSON.stringify() : Object JS -> String JSON
// Dipakai saat mau kirim data ke Server
const str = JSON.stringify(obj);
// '{"employees":[{"firstName":"John"...}]}'
