/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: JAVASCRIPT STRINGS & NUMBERS
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. Properties String (Length)
2. String Methods (Slice, Replace, Upper/Lower, Concat, Trim)
3. Template Literals (Cara modern menggabungkan string)
4. Numbers & Floating Point Precision
5. Number Methods (toString, toFixed)
*/


/* ═══════════════════════════════════════════════
   1. STRING BASICS & PROPERTIES
   ═══════════════════════════════════════════════ */

/* 
String adalah teks yang diapit quotes ("..." atau '...').
Setiap karakter di string punya index (mulai dari 0).
*/

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// LENGTH PROPERTY
// Menghitung jumlah karakter dalam string.
let pjg = text.length; // 26
console.log(pjg);


/* ═══════════════════════════════════════════════
   2. STRING METHODS (MANIPULASI TEXT)
   ═══════════════════════════════════════════════ */

let str = "Apple, Banana, Kiwi";

/* A. EXTRACTING (MENGAMBIL BAGIAN STRING) */

// slice(start, end)
// Ambil dari index 7 sampai SEBELUM 13.
let part = str.slice(7, 13); // "Banana"
// Note: Index 7 adalah 'B', Index 13 adalah ',' (koma).

// substr(start, length) - Deprecated tapi masih sering ketemu
// Ambil dari index 7, sebanyak 6 karakter.
let part2 = str.substr(7, 6); // "Banana"


/* B. REPLACING (MENGGANTI TEXT) */
// Default: Case sensitive dan hanya ganti match PERTAMA.

let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");
// Hasil: "Please visit W3Schools!"

// Tips: Gunakan /i untuk case-insensitive, /g untuk global (semua).
// text1.replace(/MICROSOFT/i, "W3Schools");


/* C. UPPERCASE & LOWERCASE */
let text2 = text1.toUpperCase(); // "PLEASE VISIT MICROSOFT!"
let text3 = text1.toLowerCase(); // "please visit microsoft!"


/* D. CONCATENATION (MENGGABUNGKAN) */
let word1 = "Hello";
let word2 = "World";

// Cara Method:
let text4 = word1.concat(" ", word2); // "Hello World"

// Cara Operator (+):
let text4_plus = word1 + " " + word2; // "Hello World"


/* E. TRIM (BERSIH-BERSIH) */
// Menghapus spasi kosong di AWAL dan AKHIR string.
// Berguna saat user input (kadang user tidak sengaja spasi).

let text5 = "      Hello World!      ";
let text5_clean = text5.trim(); // "Hello World!"


/* ═══════════════════════════════════════════════
   3. TEMPLATE LITERALS (BACKTICKS `) - PENTING!
   ═══════════════════════════════════════════════ */
/* 
Fitur ES6 (Modern JS). 
Menggunakan backtick (`) -- tombol sebelah angka 1.

KELEBIHAN:
1. Bisa enter (multi-line string).
2. Bisa insert variable langsung dengan ${...}.
*/

let firstName = "John";
let age = 30;

// Cara LAMA (Ribet):
// let welcome = "Welcome " + firstName + ", your age is " + age;

// Cara MODERN (Template Literal):
let welcome = `Welcome ${firstName}, to our site!
Your age is ${age}.`;
// Enter di atas akan tersimpan sebagai baris baru.


/* ═══════════════════════════════════════════════
   4. NUMBERS (ANGKA)
   ═══════════════════════════════════════════════ */

/* 
Di JS, hanya ada 1 tipe number: "Number".
Ia berformat "64-bit Floating Point".
Artinya: Hati-hati dengan akurasi desimal!
*/

let x = 3.14; // Desimal
let y = 10;   // Integer

// PROBLEM FLOATING POINT:
// 0.2 + 0.1 hasilnya BUKAN 0.3
// Hasilnya: 0.30000000000000004
// Solusi: Hack dengan dikali 10 lalu dibagi 10.


/* ═══════════════════════════════════════════════
   5. NUMBER METHODS
   ═══════════════════════════════════════════════ */

let num = 9.656;

/* toString() - Ubah ke String */
let nString = num.toString(); // "9.656"

/* toFixed(n) - Bulatkan ke N desimal (jadi String) */
// Sangat berguna untuk UANG (price).

let price = num.toFixed(0); // "10" (Dibulatkan)
let price2 = num.toFixed(2); // "9.66" (2 angka belakang koma)


/* KONVERSI GLOBAL METHODS */
// Mengubah tipe lain ke Number

// Number() - Konversi umum
Number("  10  ");  // 10 (Spasi diabaikan)
Number("John");    // NaN (Not a Number - Gagal)
Number(true);      // 1
Number(false);     // 0

// parseInt() - Ambil bilangan bulatnya saja
parseInt("10.33"); // 10
parseInt("10 years"); // 10 (Cerdas! bisa ambil angka depan)

// parseFloat() - Ambil bilangan desimal
parseFloat("10.33"); // 10.33
