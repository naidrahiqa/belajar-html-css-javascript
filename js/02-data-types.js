/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: DATA TYPES & FUNCTIONS
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. JavaScript Data Types (Tipe Data)
2. Dynamic Typing (Tipe bisa berubah)
3. Primitives vs Objects
4. Functions (Fungsi)
*/


/* ═══════════════════════════════════════════════
   1. DATA TYPES (TIPE DATA)
   ═══════════════════════════════════════════════ */

/* 
JAVASCRIPT PUNYA 8 TIPE DATA:

PRIMITIVES (Tipe Data Sederhana):
1. Number   - Angka (integer & desimal)
2. String   - Text
3. Boolean  - true/false
4. Undefined - Variabel belum diisi nilai
5. Null     - Nilai "kosong" dengan sengaja
6. Symbol   - Identifier unik (jarang dipakai)
7. BigInt   - Integer sangat besar

COMPLEX (Tipe Data Kompleks):
8. Object   - Collection data (Array, Object, Function, dll)

CARA CEK TIPE DATA:
typeof variableName → return string tipe data
*/

// NUMBER: Angka (integer & desimal, sama saja di JS)
let length = 16;
/* 
Penjelasan:
- let = keyword deklarasi variable (bisa diubah)
- length = nama variable
- 16 = value (tipe Number)

NUMBER di JavaScript:
- Hanya ada 1 tipe number (tidak ada int, float, double, dll)
- Bisa integer: 42
- Bisa desimal: 3.14
- Bisa scientific notation: 1.5e9 (1.5 miliar)
- Range: -(2^53 - 1) sampai (2^53 - 1)
*/

// STRING: Text
let lastName = "Johnson";
/* 
Penjelasan:
- "Johnson" adalah string (text)
- Bisa pakai double quotes: "text"
- Bisa pakai single quotes: 'text'
- Bisa pakai backticks: `text` (template literal)

KAPAN PAKAI APA?
- "..." atau '...' → String biasa
- `...` → Template literal (bisa insert variable dengan ${})
*/

// OBJECT: Collection data (key-value pairs)
let x = { firstName: "John", lastName: "Doe" };
/* 
Penjelasan OBJECT:
- Object = kumpulan data dalam key-value pairs
- Dibungkus dengan curly braces {}
- Format: key: value, key: value

STRUKTUR:
{
    firstName: "John",  ← Property 1 (key: firstName, value: "John")
    lastName: "Doe"     ← Property 2 (key: lastName, value: "Doe")
}

CARA AKSES:
- Dot notation: x.firstName → "John"
- Bracket notation: x["firstName"] → "John"
*/


/* ═══════════════════════════════════════════════
   2. DYNAMIC TYPING (TIPE DINAMIS)
   ═══════════════════════════════════════════════ */

/* 
JAVASCRIPT ADALAH DYNAMICALLY TYPED LANGUAGE

Artinya:
- Variabel TIDAK punya type tetap
- Variabel bisa ganti type kapan saja
- Berbeda dengan Java/C++ yang static typed

KEUNTUNGAN:
- Fleksibel
- Cepat untuk prototype

KERUGIAN:
- Rentan error type
- Butuh testing lebih hati-hati
*/

let data;           // Undefined (belum diisi)
/* 
UNDEFINED:
- Variabel sudah dideklarasi, tapi belum diisi nilai
- typeof data → "undefined"
- BEDA dengan null (lihat bawah)
*/

data = 5;           // Number
/* 
Sekarang data jadi Number
typeof data → "number"
*/

data = "John";      // String
/* 
Sekarang data berubah jadi String!
typeof data → "string"

Ini proof bahwa JS adalah dynamic typed:
- Variable yang sama (data) bisa berubah type
- Dari undefined → number → string
*/


/* ═══════════════════════════════════════════════
   3. STRING (TEXT)
   ═══════════════════════════════════════════════ */

let text1 = "Awalnya";
// String dengan double quotes (")

let text2 = 'Juga boleh petik satu';
// String dengan single quotes (')

/* 
ATURAN STRING:
- HARUS matching quotes
  ✅ "text"
  ✅ 'text'
  ❌ "text'  (tidak matching!)

KAPAN PAKAI SINGLE VS DOUBLE?
- Bebas! Tapi konsisten
- Jika string punya quotes di dalamnya:
  "He said 'Hello'"  ✅
  'He said "Hello"'  ✅
  "She said "Hi""    ❌ Error!

ESCAPE CHARACTER (\ backslash):
- Untuk include quotes dalam string yang sama
- "She said \"Hi\""  ✅ → She said "Hi"
*/


/* ═══════════════════════════════════════════════
   4. NUMBERS (ANGKA)
   ═══════════════════════════════════════════════ */

let x1 = 34.00;     // Desimal
// Number dengan titik desimal

let x2 = 34;        // Bulat (integer)
// Number tanpa titik desimal

/* 
PENTING DI JAVASCRIPT:
- Tidak ada perbedaan type antara integer dan float
- 34 dan 34.00 SAMA-SAMA tipe Number
- Tidak ada int, float, double seperti bahasa lain

SPECIAL NUMBERS:
NaN - Not a Number
    - Hasil dari operasi math yang invalid
    - Contoh: "text" / 2 → NaN
    - typeof NaN → "number" (aneh tapi benar!)

Infinity - Tak hingga
    - Hasil dari 1/0 → Infinity
    - typeof Infinity → "number"

-Infinity - Negatif tak hingga
*/


/* ═══════════════════════════════════════════════
   5. BOOLEANS (TRUE/FALSE)
   ═══════════════════════════════════════════════ */

let benar = true;
let salah = false;

/* 
BOOLEAN: Hanya 2 nilai → true atau false

KAPAN DIGUNAKAN?
- Kondisi if/else
- Flags (penanda status)
- Comparison result

CONTOH:
let age = 20;
let isAdult = age >= 18;  // true (karena 20 >= 18)

TRUTHY vs FALSY:
Nilai yang dianggap "false" (falsy) dalam kondisi:
- false
- 0
- "" (string kosong)
- null
- undefined
- NaN

Semua nilai lain = truthy (dianggap true)
*/


/* ═══════════════════════════════════════════════
   6. ARRAYS (LIST/DAFTAR)
   ═══════════════════════════════════════════════ */

const cars = ["Saab", "Volvo", "BMW"];
/* 
ARRAY: List/daftar berisi banyak value

STRUKTUR:
["Saab", "Volvo", "BMW"]
  │       │        │
  │       │        └─ Index 2
  │       └─ Index 1
  └─ Index 0

PENTING: Index dimulai dari 0!

CARA AKSES:
cars[0] → "Saab"    (index 0)
cars[1] → "Volvo"   (index 1)
cars[2] → "BMW"     (index 2)

ARRAY PROPERTIES:
cars.length → 3 (jumlah item)

KENAPA PAKAI const?
- const = tidak bisa reassign keseluruhan array
- TAPI bisa ubah isi array:
  cars[0] = "Toyota";  ✅ OK
  cars = [];  ❌ Error! (reassign)

ARRAY BISA CAMPUR TYPE:
let mixed = [1, "text", true, {name: "John"}];  ✅ OK di JS
*/


/* ═══════════════════════════════════════════════
   7. OBJECTS (KEY-VALUE PAIRS)
   ═══════════════════════════════════════════════ */

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
/* 
OBJECT: Collection data dalam key-value pairs

STRUKTUR:
{
    key1: value1,
    key2: value2,
    key3: value3
}

PENJELASAN:
- firstName = key/property name
- "John" = value dari property firstName
- Setiap property dipisah koma

CARA AKSES:

1. DOT NOTATION (paling umum):
   person.firstName → "John"
   person.age → 50

2. BRACKET NOTATION (jika key punya spasi atau variable):
   person["firstName"] → "John"
   
   let prop = "age";
   person[prop] → 50  (akses pakai variable)

KENAPA PAKAI const?
- Sama seperti array
- const person = tidak bisa reassign object
- TAPI bisa ubah property:
  person.age = 51;  ✅ OK
  person = {};  ❌ Error!

OBJECT vs ARRAY:
- Object → Akses by key: person.firstName
- Array → Akses by index: cars[0]
*/


/* ═══════════════════════════════════════════════
   8. FUNCTIONS (FUNGSI)
   ═══════════════════════════════════════════════ */

function myFunction(p1, p2) {
    return p1 * p2;
}
/* 
FUNCTION: Block kode yang bisa dipanggil berulang

STRUKTUR:

function functionName(parameter1, parameter2) {
         │              │          │
         │              │          └─ Parameter 2
         │              └─ Parameter 1
         └─ Nama fungsi
         
    // Kode yang dijalankan
    return hasil;  ← Return value (hasil)
}

PENJELASAN:
- function = keyword untuk buat fungsi
- myFunction = nama fungsi (bisa dipanggil)
- (p1, p2) = parameters (input fungsi)
- return = keyword untuk kembalikan hasil
- p1 * p2 = operasi yang dilakukan

CARA KERJA:
1. Definisi fungsi (code di atas) → Tidak jalan dulu
2. Panggil fungsi → Baru jalan

CARA PANGGIL:
myFunction(4, 3)
           │  │
           │  └─ Argument 2 (masuk ke p2)
           └─ Argument 1 (masuk ke p1)

PROSES:
myFunction(4, 3)
→ p1 = 4, p2 = 3
→ return 4 * 3
→ return 12
*/

let result = myFunction(4, 3); // 12
/* 
Penjelasan:
1. Panggil myFunction dengan argument 4 dan 3
2. Fungsi return 12
3. 12 disimpan di variable result

result sekarang berisi 12

KEUNTUNGAN FUNCTION:
- Reusable (bisa dipanggil berkali-kali)
- Organized (pisahkan logic)
- Maintainable (mudah diubah di 1 tempat)
*/


// FUNCTION REUSABLE (Digunakan kembali)
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
/* 
CONTOH FUNCTION PRAKTIS:
Convert Fahrenheit ke Celsius

FORMULA: C = (F - 32) × 5/9

CARA PAKAI:
toCelsius(32) → 0°C (freezing point)
toCelsius(212) → 100°C (boiling point)
toCelsius(98.6) → 37°C (body temperature)

KEUNTUNGAN:
- Tidak perlu tulis formula berulang
- Jika formula salah, fix di 1 tempat saja
- Lebih readable (toCelsiuS(32) lebih jelas dari (5/9) * (32-32))
*/

let celsiusTemp = toCelsius(32);
// celsiusTemp = 0

let bodyTemp = toCelsius(98.6);
// bodyTemp = 37


/* ═══════════════════════════════════════════════
   RINGKASAN: TYPEOF OPERATOR
   ═══════════════════════════════════════════════ */

/* 
CARA CEK TIPE DATA:

typeof 42          → "number"
typeof "text"      → "string"
typeof true        → "boolean"
typeof undefined   → "undefined"
typeof null        → "object"  ← Ini BUG di JS! Seharusnya "null"
typeof []          → "object"  (array adalah object)
typeof {}          → "object"
typeof function(){}→ "function"

CONTOH:
let x = 5;
console.log(typeof x);  // "number"

x = "Hello";
console.log(typeof x);  // "string" (berubah!)
*/
