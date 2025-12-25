// W3SCHOOLS: ADVANCED FUNCTIONS
// Topik: Closures, IIFE, Callbacks, Higher-Order Functions, Call/Apply/Bind

/* ═══════════════════════════════════════════════
   1. CLOSURES
   ═══════════════════════════════════════════════ */
/* 
Definisi: Function yang "mengingat" scope tempat dia dibuat,
meskipun function induknya sudah selesai dieksekusi.
Kegunaan: Membuat private variable & Data encapsulation.
*/

function counter() {
    let count = 0; // PRIVATE Variable (tidak bisa diakses langsung dari luar)

    // Return function inner
    return function () {
        count++; // Mengakses variable dari scope induk (Lexical Scope)
        return count;
    };
}

const myCounter = counter();
// counter() selesai jalan, tapi 'count' masih hidup di memori myCounter.

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
// console.log(count); // ERROR! count is not defined


/* ═══════════════════════════════════════════════
   2. IIFE (Immediately Invoked Function Expression)
   ═══════════════════════════════════════════════ */
/* 
Function yang langsung dipanggil saat itu juga.
Biasanya untuk inisialisasi setup atau isolasi variable agar tidak global.
*/

(function () {
    const greeting = "Hello IIFE";
    console.log(greeting);
})();
// greeting tidak ada di global scope


/* ═══════════════════════════════════════════════
   3. CALLBACK FUNCTIONS
   ═══════════════════════════════════════════════ */
/* 
Function yang dikirim sebagai parameter ke function lain,
dan dieksekusi nanti (biasanya setelah tugas function lain selesai).
Contoh: Event Listener, Timer, Fetch API.
*/

function greeting(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    const name = "Budi";
    callback(name); // Eksekusi callback
}

processUserInput(greeting); // "Hello Budi"


/* ═══════════════════════════════════════════════
   4. HIGHER-ORDER FUNCTIONS
   ═══════════════════════════════════════════════ */
/* 
Function yang melakukan salah satu:
1. Menerima function lain sebagai argumen.
2. Mengembalikan function lain sebagai hasil.
*/

// Contoh 1: Menerima function lain (seperti map, filter, reduce)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
    return num * 2;
});
// map adalah Higher-Order Function

// Contoh 2: Mengembalikan function (Factory Function)
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2); // Membuat function pengali 2
const triple = multiplier(3); // Membuat function pengali 3

console.log(double(5)); // 10
console.log(triple(5)); // 15


/* ═══════════════════════════════════════════════
   5. FUNCTION METHODS: call(), apply(), bind()
   ═══════════════════════════════════════════════ */
/* Mengontrol nilai 'this' secara manual */

const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " from " + city + ", " + country;
    }
};

const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Mary", lastName: "Jane" };

// A. CALL() - Panggil function dengan 'this' object tertentu & argumen terpisah
console.log(person.fullName.call(person1, "Oslo", "Norway"));

// B. APPLY() - Sama seperti call, tapi argumen dalam ARRAY
console.log(person.fullName.apply(person2, ["Jakarta", "Indonesia"]));

// C. BIND() - Tidak memanggil langsung, tapi MEMBUAT function baru dengan 'this' yang diikat permanen
const johnGreeter = person.fullName.bind(person1);
console.log(johnGreeter("London", "UK"));
