/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: LOGIC (IF/SWITCH) & LOOPS
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. Comparison Operators (Operator Perbandingan)
2. Logical Operators (Operator Logika)
3. If/Else Statements (Percabangan)
4. Switch Statement (Banyak Pilihan)
5. Loops (Perulangan: for, while, for...in, for...of)
*/


/* ═══════════════════════════════════════════════
   1. COMPARISON OPERATORS (OPERATOR PERBANDINGAN)
   ═══════════════════════════════════════════════ */

/* 
FUNGSI: Membandingkan 2 nilai, hasilnya TRUE atau FALSE

DAFTAR OPERATOR:

==   : Equal (cek value SAJA, type TIDAK dicek)
       Contoh: 5 == "5" → TRUE (karena value sama, type diabaikan)
       
===  : Strict Equal (cek value DAN type) ← GUNAKAN INI!
       Contoh: 5 === "5" → FALSE (value sama, tapi type beda: number vs string)
       Contoh: 5 === 5 → TRUE (value dan type sama)

!=   : Not Equal
!==  : Strict Not Equal ← GUNAKAN INI!

>    : Greater than (lebih besar)
<    : Less than (lebih kecil)
>=   : Greater than or equal (lebih besar atau sama dengan)
<=   : Less than or equal (lebih kecil atau sama dengan)

KENAPA PAKAI === BUKAN == ?
- Lebih aman dan predictable
- Menghindari bug type coercion
- Best practice di JavaScript modern
*/

let age = 20;
let name = "20";

console.log(age == name);   // → TRUE (value sama, type diabaikan) ❌ Bahaya!
console.log(age === name);  // → FALSE (value sama, tapi type beda) ✅ Aman!



/* ═══════════════════════════════════════════════
   2. LOGICAL OPERATORS (OPERATOR LOGIKA)
   ═══════════════════════════════════════════════ */

/* 
FUNGSI: Menggabungkan beberapa kondisi

&&  (AND) : Semua kondisi harus TRUE
    true && true   → TRUE
    true && false  → FALSE
    false && false → FALSE
    
||  (OR) : Salah satu kondisi TRUE sudah cukup
    true || true   → TRUE
    true || false  → TRUE
    false || false → FALSE

!   (NOT) : Membalik boolean
    !true  → FALSE
    !false → TRUE

CONTOH KASUS NYATA:
*/

let userAge = 25;
let weight = 80;

// AND: Harus kedua kondisi terpenuhi
if (userAge > 18 && weight < 100) {
    console.log("Boleh ikut program");
    // ↑ Akan TRUE jika age > 18 DAN weight < 100
}

// OR: Salah satu kondisi saja cukup
if (userAge < 18 || weight > 120) {
    console.log("Tidak boleh ikut");
    // ↑ Akan TRUE jika age < 18 ATAU weight > 120
}

// NOT: Membalik kondisi
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Silakan login");
    // ↑ !false = true, jadi masuk kondisi ini
}



/* ═══════════════════════════════════════════════
   3. IF / ELSE STATEMENT (PERCABANGAN)
   ═══════════════════════════════════════════════ */

/* 
FUNGSI: Menjalankan kode JIKA kondisi terpenuhi

STRUKTUR:

if (kondisi) {
    // Kode jika kondisi TRUE
} else {
    // Kode jika kondisi FALSE
}

CARA KERJA:
1. Cek kondisi di dalam if()
2. Jika TRUE → Jalankan kode di dalam {}
3. Jika FALSE → Skip, jalankan else (jika ada)
*/

let hour = 14; // 14:00 (jam 2 siang)
let greeting;

// IF ELSE SEDERHANA
if (hour < 18) {
    greeting = "Good day";
    // ↑ Jalan karena 14 < 18 (TRUE)
} else {
    greeting = "Good evening";
    // ↑ Ini tidak jalan karena kondisi TRUE
}
console.log(greeting); // → "Good day"


// IF / ELSE IF / ELSE (BANYAK KONDISI)
/*
STRUKTUR:

if (kondisi1) {
    // Jika kondisi1 TRUE
} else if (kondisi2) {
    // Jika kondisi1 FALSE, tapi kondisi2 TRUE
} else if (kondisi3) {
    // Jika kondisi2 FALSE, tapi kondisi3 TRUE
} else {
    // Jika semua kondisi FALSE
}

CARA KERJA:
- Cek dari atas ke bawah
- Yang pertama TRUE → langsung dijalankan
- Sisanya di-skip (tidak dicek lagi)
*/

let time = 15; // 3 PM
let greetingMessage;

if (time < 10) {
    greetingMessage = "Good morning";
    // ↑ 15 < 10? FALSE, skip

} else if (time < 20) {
    greetingMessage = "Good day";
    // ↑ 15 < 20? TRUE, STOP DI SINI!

} else {
    greetingMessage = "Good evening";
    // ↑ Tidak dicek karena sudah ada yang TRUE di atas
}

console.log(greetingMessage); // → "Good day"


// TERNARY OPERATOR (IF/ELSE SINGKAT)
/*
FUNGSI: If/else dalam 1 baris

STRUKTUR:
kondisi ? nilaiJikaTRUE : nilaiJikaFALSE
   │           │               │
   │           │               └─ Nilai jika kondisi FALSE
   │           └─ Nilai jika kondisi TRUE
   └─ Kondisi yang dicek
*/

let ageUser = 20;
let status = (ageUser >= 18) ? "Adult" : "Minor";
//            └─ Kondisi       └─ TRUE  └─ FALSE

console.log(status); // → "Adult" (karena 20 >= 18 adalah TRUE)



/* ═══════════════════════════════════════════════
   4. SWITCH STATEMENT (BANYAK PILIHAN)
   ═══════════════════════════════════════════════ */

/* 
FUNGSI: Pilih 1 dari BANYAK pilihan (alternatif if/else if panjang)

KAPAN DIGUNAKAN?
- Cek 1 variable dengan banyak value berbeda
- Lebih rapi dari if/else if panjang

STRUKTUR:

switch (expression) {
    case value1:
        // Kode jika expression === value1
        break; ← WAJIB! Stop di sini
    case value2:
        // Kode jika expression === value2
        break;
    default:
        // Kode jika tidak ada yang cocok
}

CARA KERJA:
1. Evaluasi expression
2. Bandingkan dengan setiap case (pakai ===)
3. Jika cocok → jalankan kode sampai break
4. break → keluar dari switch
5. Jika tidak ada yang cocok → jalankan default
*/

let dayNumber = new Date().getDay();
// ↑ getDay() return angka: 0=Minggu, 1=Senin, 2=Selasa, dst
let dayName;

switch (dayNumber) {
    case 0:
        dayName = "Sunday";
        break; // ← PENTING! Keluar dari switch

    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;

    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;

    case 6:
        dayName = "Saturday";
        break;

    default:
        // Jika dayNumber bukan 0-6 (tidak mungkin sih)
        dayName = "Invalid day";
}

console.log(dayName); // → Hari sekarang

/* 
KENAPA BREAK PENTING?
Tanpa break, kode akan "jatuh" ke case berikutnya!

switch (x) {
    case 1:
        console.log("One");
        // TIDAK ADA BREAK! ❌
    case 2:
        console.log("Two");
        break;
}

Jika x = 1, output:
"One"
"Two"  ← Ini juga jalan! (fall-through)
*/



/* ═══════════════════════════════════════════════
   5. LOOPS (PERULANGAN)
   ═══════════════════════════════════════════════ */

/* 
FUNGSI: Menjalankan kode secara BERULANG

ADA 4 JENIS LOOP:
1. for       : Jika tahu berapa kali muter
2. for...in  : Loop object properties (key)
3. for...of  : Loop array/string values
4. while     : Selama kondisi TRUE
*/


/* ─────────────────────────────────────────────
   5.1 FOR LOOP
   ───────────────────────────────────────────── */

/* 
KAPAN DIGUNAKAN? Jika kamu TAHU berapa kali loop

STRUKTUR:

for (initialization; condition; increment) {
     │                  │          │
     │                  │          └─ Update setiap loop
     │                  └─ Kondisi continue loop
     └─ Inisialisasi counter

CARA KERJA:
1. initialization → Sekali di awal
2. Cek condition → Jika TRUE, jalan
3. Jalankan kode di dalam {}
4. increment → Update counter
5. Ulangi dari step 2

CONTOH:
for (let i = 0; i < 5; i++) {
     │           │       │
     │           │       └─ i = i + 1 (naik 1)
     │           └─ Selama i kurang dari 5
     └─ Mulai dari 0

ITERASI:
i=0 → 0 < 5? YES → Run → i++ (jadi 1)
i=1 → 1 < 5? YES → Run → i++ (jadi 2)
i=2 → 2 < 5? YES → Run → i++ (jadi 3)
i=3 → 3 < 5? YES → Run → i++ (jadi 4)
i=4 → 4 < 5? YES → Run → i++ (jadi 5)
i=5 → 5 < 5? NO  → STOP
*/

let text = "";
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
    // i=0 → "The number is 0<br>"
    // i=1 → "The number is 1<br>"
    // dst sampai i=4
}
console.log(text);
// Output:
// The number is 0<br>
// The number is 1<br>
// The number is 2<br>
// The number is 3<br>
// The number is 4<br>


/* ─────────────────────────────────────────────
   5.2 FOR...IN LOOP
   ───────────────────────────────────────────── */

/* 
KAPAN DIGUNAKAN? Loop PROPERTIES (keys) dari OBJECT

STRUKTUR:
for (let key in object) {
     // key = nama property
     // object[key] = value property
}

CARA KERJA:
Loop semua property dalam object
*/

const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let txt = "";
for (let x in person) {
    // x = "fname", lalu "lname", lalu "age" (keys)
    txt += person[x] + " ";
    // person["fname"] → "John"
    // person["lname"] → "Doe"
    // person["age"] → 25
}

console.log(txt); // → "John Doe 25 "


/* ─────────────────────────────────────────────
   5.3 FOR...OF LOOP
   ───────────────────────────────────────────── */

/* 
KAPAN DIGUNAKAN? Loop ISI (values) dari ARRAY atau STRING

STRUKTUR:
for (let value of array) {
     // value = isi array
}

PERBEDAAN FOR...IN vs FOR...OF:

FOR...IN  → Loop KEYS/INDEX
for (let i in arr) { }  // i = 0, 1, 2, ... (index)

FOR...OF  → Loop VALUES (isi)
for (let item of arr) { }  // item = isi array
*/

const cars = ["BMW", "Volvo", "Mini"];
let carText = "";

// FOR...OF: Loop isi array
for (let car of cars) {
    // car = "BMW", lalu "Volvo", lalu "Mini"
    carText += car + " ";
}
console.log(carText); // → "BMW Volvo Mini "

// Bisa juga untuk STRING
const name2 = "JavaScript";
for (let char of name2) {
    console.log(char); // J, a, v, a, S, ...
}


/* ─────────────────────────────────────────────
   5.4 WHILE LOOP
   ───────────────────────────────────────────── */

/* 
KAPAN DIGUNAKAN? Selama kondisi TRUE (tidak tahu pasti berapa kali)

STRUKTUR:

while (kondisi) {
    // Kode yang diulang
    // WAJIB ada yang bikin kondisi jadi FALSE
    // Kalau tidak, INFINITE LOOP! (loop selamanya)
}

CARA KERJA:
1. Cek kondisi
2. Jika TRUE → Jalankan kode
3. Kembali ke step 1
4. Jika FALSE → Stop

HATI-HATI INFINITE LOOP:
while (true) {
    console.log("Forever"); // ❌ Tidak pernah berhenti!
}
*/

let i = 0;
let whileText = "";

while (i < 10) {
    whileText += "The number is " + i + "<br>";
    i++; // ← PENTING! Increment i, kalau tidak loop selamanya

    // ITERASI:
    // i=0 → 0<10? YES → Run → i jadi 1
    // i=1 → 1<10? YES → Run → i jadi 2
    // ...
    // i=9 → 9<10? YES → Run → i jadi 10
    // i=10 → 10<10? NO → STOP
}

console.log(whileText);


/* ═══════════════════════════════════════════════
   LOOP CONTROL (BREAK & CONTINUE)
   ═══════════════════════════════════════════════ */

/* 
BREAK    : Keluar dari loop (stop langsung)
CONTINUE : Skip iterasi ini, lanjut ke iterasi berikutnya
*/

// BREAK Example
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop loop saat i = 5
    }
    console.log(i); // 0, 1, 2, 3, 4 (berhenti di 5)
}

// CONTINUE Example
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip i = 5, lanjut ke i = 6
    }
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9 (skip 5)
}
