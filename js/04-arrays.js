/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: JAVASCRIPT ARRAYS
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. Apa itu Array?
2. Membuat dan Mengakses Array
3. Array Methods (Push, Pop, Shift, Unshift, etc)
4. Looping Array
5. Sorting Array (String vs Number)
*/

/* ═══════════════════════════════════════════════
   1. APA ITU ARRAY?
   ═══════════════════════════════════════════════ */

/* 
Array adalah variabel spesial yang bisa menampung BANYAK nilai sekaligus.
Bayangkan seperti rak sepatu yang punya banyak slot bernomor.

SYNTAX:
const array_name = [item1, item2, ...];

KENAPA PAKAI CONST?
- Best practice untuk array adalah declare pakai 'const'.
- 'const' menjamin tipe datanya tetap array (tidak bisa diubah jadi string/int).
- TAPI, kita tetap bisa mengubah, menambah, atau menghapus item DI DALAMNYA.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Array di JS bisa menampung tipe apa saja campur (String, Number, Object, dll).


/* ═══════════════════════════════════════════════
   2. ACCESSING ELEMENTS (MENGAKSES ELEMEN)
   ═══════════════════════════════════════════════ */

/*
Array menggunakan INDEX berbasis 0 (Zero-based indexing).
Item pertama = index 0.
Item kedua = index 1.
*/

let fruit = fruits[0]; // Mengambil "Banana"
console.log(fruit);

// Mengubah elemen
fruits[0] = "Kiwi"; // Sekarang "Banana" diganti "Kiwi"

// Mengakses elemen TERAKHIR
// length = total item (4). Index tertinggi = length - 1 (3).
let last = fruits[fruits.length - 1]; // Mengambil "Mango"


/* ═══════════════════════════════════════════════
   3. LOOPING ARRAY (PERULANGAN)
   ═══════════════════════════════════════════════ */

/* CARA 1: FOR LOOP (Klasik) */
// Gunakan jika butuh kontrol penuh terhadap index (i)
console.log("--- For Loop ---");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/* CARA 2: FOREACH (Modern & Ringkas) */
// Gunakan jika hanya ingin memproses setiap item
console.log("--- ForEach ---");
fruits.forEach((item, index) => {
    // Parameter pertama: item itu sendiri
    // Parameter kedua (opsional): index item
    console.log(index + ": " + item);
});


/* ═══════════════════════════════════════════════
   4. ARRAY METHODS PENTING
   ═══════════════════════════════════════════════ */

// Awal: ["Kiwi", "Orange", "Apple", "Mango"]

/* KONVERSI KE STRING */
let text = fruits.toString();
// Hasil: "Kiwi,Orange,Apple,Mango" (dipisah koma)

/* ADD & REMOVE (End of Array) - Stack Operation */
let lastOne = fruits.pop();
// pop() -> Menghapus elemen TERAKHIR ("Mango")
// Return value: Elemen yang dihapus ("Mango")
// Array skrg: ["Kiwi", "Orange", "Apple"]

fruits.push("Pineapple");
// push() -> Menambah elemen baru di AKHIR
// Return value: Panjang array baru
// Array skrg: ["Kiwi", "Orange", "Apple", "Pineapple"]

/* ADD & REMOVE (Start of Array) */
let firstOne = fruits.shift();
// shift() -> Menghapus elemen PERTAMA ("Kiwi")
// Seluruh elemen bergeser indexnya (index 1 jadi 0, dst).
// Array skrg: ["Orange", "Apple", "Pineapple"]

fruits.unshift("Lemon");
// unshift() -> Menambah elemen di DEPAN (index 0)
// Array skrg: ["Lemon", "Orange", "Apple", "Pineapple"]


/* SPLICE (Operasi Bedah/Menyisipkan) */
// splice(start_index, how_many_remove, item1, item2...)

fruits.splice(2, 0, "Durian", "Pepaya");
// Artinya: Mulai di index 2, hapus 0 item, sisipkan "Durian" & "Pepaya".
// Array skrg: ["Lemon", "Orange", "Durian", "Pepaya", "Apple", "Pineapple"]
//                    ^ index 2 baru


/* SLICE (Mengiris/Memotong) */
// Membuat array BARU dari potongan array lama. TIDAK mengubah array asli.
// slice(start_index, end_index) -> end_index tidak termasuk (exclusive)

const citrus = fruits.slice(1, 3);
// Ambil dari index 1 ("Orange") sampai SEBELUM 3.
// Index 1, 2 diambil. Index 3 TIDAK.
// Hasil: ["Orange", "Durian"]


/* ═══════════════════════════════════════════════
   5. SORTING (PENGURUTAN)
   ═══════════════════════════════════════════════ */

fruits.sort();
// sort() defaultnya mengurutkan berdasarkan String (Alphabetical) secara Ascending (A-Z).
// Array: ["Apple", "Durian", "Lemon", "Orange", "Pepaya", "Pineapple"]

fruits.reverse();
// reverse() membalikkan urutan array (Z-A kalau habis di sort).


/* ⚠️ BAHAYA SORTING NUMBER */
const points = [40, 100, 1, 5, 25, 10];

// Jika pakai points.sort() biasa:
// 100 akan dianggap lebih kecil dari 25 karena "1" < "2" (String comparison).
// Hasil Salah: 1, 10, 100, 25, 40, 5

/* SOLUSI: COMPARE FUNCTION */
// Fungsi ini memberi tahu sort bagaimana membandingkan dua angka (a dan b).
// return a - b; (Ascending / Kecil ke Besar)
// return b - a; (Descending / Besar ke Kecil)

points.sort(function (a, b) {
    return a - b;
});
// Hasil Benar: 1, 5, 10, 25, 40, 100

/* CARA KERJA (a - b):
- Jika hasil negatif, a ditaruh sebelum b (a < b)
- Jika hasil positif, b ditaruh sebelum a (b < a)
- Jika nol, posisi tetap.
Contoh: bandingkan 40 dan 100. (40 - 100) = -60. Negatif, jadi 40 di kiri, 100 dikanan.
*/

// Descending (Besar ke Kecil)
points.sort(function (a, b) { return b - a });
