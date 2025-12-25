// W3SCHOOLS: ERROR HANDLING & DEBUGGING

/* ═══════════════════════════════════════════════
   1. TRY...CATCH...FINALLY
   ═══════════════════════════════════════════════ */
/*
Mencegah script mati total (crash) saat ada error.
*/

try {
    // BLOCK 1: Kode yang ingin dicoba (potensi error)
    console.log("Mencoba jalankan kode...");

    // const data = JSON.parse("Bukan JSON"); // Ini akan melempar error
    const x = 10;
    console.log("Sukses!");

} catch (error) {
    // BLOCK 2: Menangani error (Jalan hanya jika ada error di Block 1)
    console.error("Terjadi Error!");
    console.log("Pesan Error: " + error.message);

} finally {
    // BLOCK 3: Selalu jalan (Sukses maupun Error)
    // Biasanya untuk cleanup (tutup loading spinner, tutup koneksi)
    console.log("Selesai (Finally block executed).");
}


/* ═══════════════════════════════════════════════
   2. THROW (MELEMPAR ERROR CUSTOM)
   ═══════════════════════════════════════════════ */
/*
Kita bisa membuat aturan error sendiri menggunakan 'throw'.
*/

function bagiAngka(a, b) {
    if (b === 0) {
        // Stop eksekusi dan lempar error object
        throw new Error("Dilarang membagi dengan NOL! Itu ilegal di matematika.");
    }
    return a / b;
}

try {
    console.log(bagiAngka(10, 2)); // 5
    console.log(bagiAngka(10, 0)); // ERROR -> Masuk catch
} catch (err) {
    console.error("Custom Error Caught: " + err.message);
}


/* ═══════════════════════════════════════════════
   3. JENIS-JENIS ERROR UMUM
   ═══════════════════════════════════════════════ */

/* 
1. ReferenceError : Mengakses variable yang tidak ada.
   console.log(variableHantu);
   
2. TypeError : Operasi pada tipe data yang salah.
   let num = 1;
   num.toUpperCase(); // Error, number tidak punya method string.
   
3. SyntaxError : Kode salah tulis (kurang kurung, dsb).
   Biasanya terdeteksi sebelum kode jalan.
*/


/* ═══════════════════════════════════════════════
   4. CUSTOM ERROR CLASS (Lanjutan)
   ═══════════════════════════════════════════════ */

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validasiInput(input) {
    if (!input) {
        throw new ValidationError("Input tidak boleh kosong!");
    }
    return "Valid";
}

try {
    validasiInput("");
} catch (e) {
    if (e instanceof ValidationError) {
        console.warn("Validasi gagal: " + e.message); // Handle spesifik
    } else {
        console.error("Error tak dikenal: " + e); // Handle error lain
    }
}


/* ═══════════════════════════════════════════════
   5. DEBUGGING TIPS
   ═══════════════════════════════════════════════ */

// A. Console API
const user = { id: 1, name: "Admin" };

console.log("Normal log");
console.warn("Peringatan (kuning)");
console.error("Error (merah)");

// Menampilkan data dalam tabel (Sangat berguna untuk Array/Object!)
const users = [
    { name: "John", age: 20 },
    { name: "Doe", age: 30 }
];
console.table(users);


// B. Keyword 'debugger'
// Jika DevTools (F12) terbuka, kode akan PAUSE di baris ini.
function hitungRumit() {
    let a = 10;
    let b = 20;

    // debugger; // Uncomment baris ini untuk stop di sini

    return a * b;
}
hitunRumit();
