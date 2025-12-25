/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: JAVASCRIPT SYNTAX, STATEMENTS, & VARIABLES
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. JavaScript Syntax (Aturan penulisan)
2. Statements (Pernyataan/instruksi)
3. Variables (Variabel untuk menyimpan data)
4. Operators (Operator matematika & perbandingan)
*/


/* ═══════════════════════════════════════════════
   1. JAVASCRIPT STATEMENTS (PERNYATAAN)
   ═══════════════════════════════════════════════ */

/* 
APA ITU STATEMENT?
- Statement = Instruksi yang diberikan ke browser
- Setiap statement adalah "perintah" yang dieksekusi
- Statement diakhiri dengan titik koma (;)

SYNTAX STATEMENT:
statement1;
statement2;
statement3;

CARA KERJA:
Browser membaca statement dari ATAS ke BAWAH
Satu per satu, berurutan

CONTOH ANALOGI:
Statement seperti "langkah-langkah resep masakan":
1. Panaskan minyak
2. Tumis bawang
3. Masukkan ayam
→ Harus berurutan!
*/

let x, y, z;    // Statement 1: Deklarasi variabel
/* 
Penjelasan Statement 1:
- let = keyword untuk deklarasi variabel
- x, y, z = nama variabel (belum punya nilai)
- Bisa deklarasi banyak variabel sekaligus dengan koma

Setelah line ini:
x = undefined
y = undefined  
z = undefined
*/

x = 5;          // Statement 2: Assign value ke x
/* 
Penjelasan Statement 2:
- = adalah assignment operator (bukan "sama dengan"!)
- Assign nilai 5 ke variabel x
- Sekarang x berisi 5
*/

y = 6;          // Statement 3: Assign value ke y
/* 
Sekarang y berisi 6
*/

z = x + y;      // Statement 4: Perhitungan
/* 
Penjelasan Statement 4:
- Ambil nilai x (5)
- Tambah dengan nilai y (6)
- Hasil (11) disimpan ke z

URUTAN EKSEKUSI:
1. Baca nilai x → 5
2. Baca nilai y → 6
3. Hitung 5 + 6 → 11
4. Assign 11 ke z

Sekarang z berisi 11
*/


/* ═══════════════════════════════════════════════
   2. VARIABLES (VARIABEL)
   ═══════════════════════════════════════════════ */

/* 
APA ITU VARIABEL?
- Variabel = "Wadah" untuk menyimpan data
- Seperti kotak dengan label
- Bisa diisi, diubah, dibaca

ANALOGI:
Variabel seperti loker:
- Nama variabel = nomor loker
- Nilai variabel = barang di dalam loker

ADA 4 CARA DEKLARASI VARIABEL:

1. AUTOMATIC (Tanpa keyword) - ❌ JANGAN PAKAI!
   x = 5;
   - Otomatis jadi global variable
   - Sulit di-debug
   - Tidak recommended

2. var (Keyword lama 1995-2015) - ⚠️ HINDARI
   var x = 5;
   - Function scope (bukan block scope)
   - Bisa re-declare
   - Hoisting behavior aneh
   - Deprecated (jangan pakai di code baru)

3. let (ES6 2015) - ✅ GUNAKAN INI
   let x = 5;
   - Block scope
   - Bisa diubah nilainya
   - Tidak bisa re-declare
   - GUNAKAN untuk nilai yang AKAN BERUBAH

4. const (ES6 2015) - ✅ GUNAKAN INI (DEFAULT CHOICE!)
   const x = 5;
   - Block scope
   - TIDAK bisa diubah nilainya
   - Tidak bisa re-declare
   - GUNAKAN untuk nilai yang TIDAK AKAN BERUBAH

KAPAN PAKAI APA?
┌─────────────────────────────────────────┐
│ DEFAULT: Selalu pakai const            │
│ KECUALI: Nilai akan berubah → pakai let│
│ NEVER: Jangan pakai var                │
└─────────────────────────────────────────┘

KENAPA const DEFAULT?
- Lebih aman (prevent accidental reassignment)
- Lebih mudah di-debug
- Code lebih predictable
- Performance sedikit lebih baik
*/


/* ═════════════════════════════════════
   2.1 const - CONSTANT (Tidak Berubah)
   ═════════════════════════════════════ */

const PI = 3.141592653589793;
/* 
const = constant (nilai tetap/konstan)

ATURAN const:
1. WAJIB diisi saat deklarasi
   const x;  ❌ ERROR! Must be initialized
   const x = 5;  ✅ OK

2. TIDAK bisa di-reassign
   const x = 5;
   x = 10;  ❌ ERROR! Assignment to constant variable

3. HARUS uppercase untuk konstanta universal
   const PI = 3.14;  ✅ Good
   const MAX_VALUE = 100;  ✅ Good
   const userAge = 25;  ✅ OK (tidak universal)

KAPAN PAKAI const?
- Mathematical constants: PI, E
- Configuration values: API_KEY, BASE_URL
- Values yang tidak berubah: maxAttempts, defaultColor
- Arrays & Objects (isi bisa berubah, tapi reference tidak):
  const arr = [1,2,3];
  arr.push(4);  ✅ OK (isi berubah)
  arr = [];  ❌ ERROR (reassign)
*/

// PI = 3.14;      // ❌ ERROR! TypeError: Assignment to constant variable
// PI = PI + 10;   // ❌ ERROR! Tidak bisa diubah sama sekali

/* 
Kalau coba ubah const, akan error:
"Uncaught TypeError: Assignment to constant variable"
*/


/* ═════════════════════════════════════
   2.2 let - LET IT CHANGE (Bisa Berubah)
   ═════════════════════════════════════ */

let nama = "Budi";
/* 
let = variable yang bisa berubah

ATURAN let:
1. Bisa di-reassign
   let x = 5;
   x = 10;  ✅ OK

2. Tidak bisa re-declare di scope yang sama
   let x = 5;
   let x = 10;  ❌ ERROR! Identifier 'x' has already been declared

3. Block scope (hanya ada di dalam {})
   if (true) {
       let x = 5;
   }
   console.log(x);  ❌ ERROR! x is not defined
*/

nama = "Andi";     // ✅ OK - Reassignment boleh untuk let
/* 
Variabel nama sekarang berisi "Andi" (tidak lagi "Budi")

KAPAN PAKAI let?
- Loop counters: for (let i = 0; ...)
- Variables yang berubah: let score = 0; score++;
- Temporary variables: let temp;
- Reassignment needed: let status = "pending"; status = "complete";
*/


/* ═══════════════════════════════════════════════
   2.3 NAMING RULES (Aturan Penamaan Variabel)
   ═══════════════════════════════════════════════ */

/* 
ATURAN WAJIB (Syntax Rules):
1. Harus dimulai dengan:
   - Letter (a-z, A-Z) ✅
   - Underscore (_) ✅
   - Dollar sign ($) ✅
   
   TIDAK boleh dimulai dengan:
   - Angka ❌
   - Simbol lain ❌

2. Setelah karakter pertama, boleh:
   - Letters
   - Numbers
   - Underscores
   - Dollar signs

3. Case-sensitive (huruf besar/kecil beda)
   let nama ≠ let Nama ≠ let NAMA

4. Tidak boleh pakai reserved words
   let let = 5;  ❌ ERROR
   let function = 5;  ❌ ERROR
   let if = 5;  ❌ ERROR

CONTOH VALID:
let firstName;  ✅
let _private;  ✅
let $price;  ✅
let age2;  ✅
let myVeryLongVariableName;  ✅

CONTOH INVALID:
let 2age;  ❌ Tidak boleh mulai dengan angka
let my-name;  ❌ Tidak boleh pakai dash
let my name;  ❌ Tidak boleh pakai space

BEST PRACTICES (Rekomendasi):
1. Gunakan camelCase untuk variabel:
   let firstName;  ✅ Good
   let first_name;  ⚠️ OK tapi tidak standard JS

2. Gunakan UPPERCASE untuk const global:
   const API_KEY = "...";  ✅
   const MAX_RETRY = 3;  ✅

3. Deskriptif (jelas maksudnya):
   let u;  ❌ Bad (apa itu u?)
   let userName;  ✅ Good (jelas!)

4. Jangan terlalu panjang:
   let theNameOfTheUserWhoIsCurrentlyLoggedIn;  ❌ Terlalu panjang
   let currentUser;  ✅ Lebih baik
*/


/* ═══════════════════════════════════════════════
   3. OPERATORS (OPERATOR)
   ═══════════════════════════════════════════════ */

/* 
OPERATOR = Simbol untuk operasi pada nilai

KATEGORI OPERATOR:
1. Arithmetic (Matematika)
2. Assignment (Penugasan)
3. Comparison (Perbandingan)
4. Logical (Logika) - di materi lain
*/


/* ─────────────────────────────────────
   3.1 ARITHMETIC OPERATORS
   ───────────────────────────────────── */

/* 
+ : Penjumlahan
- : Pengurangan
* : Perkalian
/ : Pembagian
% : Modulus (sisa bagi)
** : Exponentiation (pangkat)
++ : Increment (tambah 1)
-- : Decrement (kurang 1)
*/

// MODULUS (%)
let sisa = 10 % 3; // Hasil 1
/* 
MODULUS: Sisa dari pembagian

CARA KERJA:
10 ÷ 3 = 3 sisa 1
        │       └─ Ini yang diambil modulus
        └─ Ini hasil bagi (diabaikan)

CONTOH:
10 % 3 = 1  (10 = 3×3 + 1)
15 % 4 = 3  (15 = 4×3 + 3)
20 % 5 = 0  (20 = 5×4 + 0, habis dibagi)

KAPAN DIGUNAKAN?
- Cek angka genap/ganjil: if (num % 2 === 0) // genap
- Loop setiap N kali: if (i % 5 === 0) // setiap 5
- Wrapping/cycling: index = (index + 1) % arrayLength
*/

// EXPONENTIATION (**)
let pangkat = 5 ** 2; // Hasil 25
/* 
EXPONENTIATION: Pemangkatan

5 ** 2 = 5²  = 5 × 5 = 25
2 ** 3 = 2³  = 2 × 2 × 2 = 8
10 ** 3 = 10³ = 10 × 10 × 10 = 1000

SAMA DENGAN:
Math.pow(5, 2)  // Cara lama
5 ** 2  // Cara baru (ES7) - Lebih pendek
*/

// INCREMENT & DECREMENT
let counter = 10;
counter++;  // counter = counter + 1; → Jadi 11
counter--;  // counter = counter - 1; → Jadi 10

/* 
++ : Tambah 1
-- : Kurang 1

ADA 2 JENIS:

1. POST-INCREMENT (x++)
   let x = 5;
   let y = x++;
   // y = 5 (nilai SEBELUM ditambah)
   // x = 6 (ditambah SETELAH diambil)

2. PRE-INCREMENT (++x)
   let x = 5;
   let y = ++x;
   // x = 6 (ditambah DULU)
   // y = 6 (nilai SETELAH ditambah)

PERBEDAAN:
x++  → Pakai dulu, baru tambah
++x  → Tambah dulu, baru pakai

KEBANYAKAN WAKTU: Tidak beda (pakai yang mana saja)
Kecuali saat diassign ke variabel lain
*/


/* ─────────────────────────────────────
   3.2 ASSIGNMENT OPERATORS
   ───────────────────────────────────── */

/* 
=   : Assign
+=  : Add and assign
-=  : Subtract and assign
*=  : Multiply and assign
/=  : Divide and assign
%=  : Modulus and assign
*/

let a = 10;  // Assignment biasa
a += 5;      // a = a + 5; → Jadi 15
/*
SHORTHAND ASSIGNMENT:

PANJANG:        PENDEK:
a = a + 5;  →   a += 5;
a = a - 3;  →   a -= 3;
a = a * 2;  →   a *= 2;
a = a / 2;  →   a /= 2;
a = a % 3;  →   a %= 3;

KENAPA PAKAI SHORTHAND?
- Lebih pendek
- Lebih cepat ditulis
- Lebih readable (for developers yang terbiasa)

CARA BACA:
a += 5  → "a plus equals 5" atau "tambah a dengan 5"
a *= 2  → "a times equals 2" atau "kali a dengan 2"
*/


/* ─────────────────────────────────────
   3.3 COMPARISON OPERATORS
   ───────────────────────────────────── */

/* 
==  : Equal to (value saja)
=== : Strict equal (value DAN type)
!=  : Not equal
!== : Strict not equal
>   : Greater than
<   : Less than
>=  : Greater than or equal
<=  : Less than or equal
*/

let c = 5;
let d = "5";

/*
PENTING! == vs ===

== (Loose Equality)
- Bandingkan VALUE saja
- Type conversion otomatis
- 5 == "5" → TRUE (karena "5" diconvert jadi 5)

=== (Strict Equality) ← GUNAKAN INI!
- Bandingkan VALUE dan TYPE
- Tidak ada conversion
- 5 === "5" → FALSE (number ≠ string)

CONTOH:
c == d   → TRUE  (5 == "5", value sama)
c === d  → FALSE (5 !== "5", type beda!)

KENAPA PAKAI ===?
- Lebih aman (no surprise)
- Lebih predictable
- Avoid bugs
- Best practice JavaScript modern

CONTOH BUG dengan ==:
0 == false  → TRUE  😱 (unexpected!)
"" == false → TRUE  😱
null == undefined → TRUE  😱

DENGAN ===:
0 === false → FALSE ✅ (clear!)
"" === false → FALSE ✅
null === undefined → FALSE ✅

RULE: Selalu pakai === dan !==
Jangan pakai == dan != kecuali ada alasan spesifik
*/

// c == d  // TRUE, karena nilainya sama 5
// c === d // FALSE, karena number beda dengan string

/* 
COMPARISON LAINNYA:
5 > 3   → TRUE
5 < 3   → FALSE
5 >= 5  → TRUE (lebih besar ATAU sama dengan)
3 <= 5  → TRUE

Hasil comparison = boolean (true/false)
Digunakan dalam if statements
*/


/* ═══════════════════════════════════════════════
   RINGKASAN & BEST PRACTICES
   ═══════════════════════════════════════════════ */

/* 
1. VARIABLES:
   - Default: pakai const
   - Jika perlu berubah: pakai let
   - Never: pakai var

2. NAMING:
   - camelCase untuk variable
   - UPPERCASE untuk const global
   - Deskriptif dan jelas

3. OPERATORS:
   - Pakai === bukan ==
   - Pahami % untuk modulus
   - Gunakan ** untuk pangkat
   - Shorthand assignment (+=, -=, etc) lebih baik

4. STATEMENTS:
   - Satu statement per line
   - Akhiri dengan semicolon ;
   - Berurutan dari atas ke bawah
*/
