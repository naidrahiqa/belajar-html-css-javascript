// W3SCHOOLS: FETCH API (HTTP REQUESTS)

/* ═══════════════════════════════════════════════
   PENDAHULUAN
   ═══════════════════════════════════════════════ */
/* 
Fetch API adalah cara modern JavaScript untuk mengambil data dari Server (API).
Menggantikan XMLHttpRequest (AJAX) lama.
Fetch berbasis PROMISE.
*/
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

/* ═══════════════════════════════════════════════
   1. BASIC FETCH (THEN/CATCH)
   ═══════════════════════════════════════════════ */

// fetch(url) -> return Promise yang resolve Object Response
fetch(API_URL)
    .then(response => {
        // Tahap 1: Cek status HTTP & Convert body ke JSON
        // fetch tidak otomatis reject jika 404/500, jadi harus dicek manual
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json(); // Mengembalikan Promise lagi (parsing body)
    })
    .then(data => {
        // Tahap 2: Gunakan data
        console.log("1. Basic Fetch Data:", data.name);
    })
    .catch(error => {
        // Tahap 3: Handle error (misal offline/DNS error)
        console.error("1. Fetch Error:", error);
    });


/* ═══════════════════════════════════════════════
   2. ASYNC / AWAIT (CARA MODERN)
   ═══════════════════════════════════════════════ */
/* Syntax ini membuat kode asynchronous terlihat rapi seperti synchronous */

async function getUser() {
    try {
        console.log("Loading...");

        // Await 1: Tunggu fetch selesai & dapat headers response
        const response = await fetch(API_URL);

        // Validasi
        if (!response.ok) throw new Error("Gagal mengambil data");

        // Await 2: Tunggu parsing body selesai
        const data = await response.json();

        console.log("2. Async/Await Data:", data);
        return data;

    } catch (error) {
        console.error("2. Load Error:", error.message);
    }
}
// getUser(); // Uncomment untuk jalankan


/* ═══════════════════════════════════════════════
   3. POST REQUEST (MENGIRIM DATA)
   ═══════════════════════════════════════════════ */

async function createPost() {
    // Data yang akan dikirim
    const postData = {
        title: 'Belajar Fetch',
        body: 'Fetch API itu seru!',
        userId: 1
    };

    try {
        // Parameter kedua fetch adalah object options
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', // Default adalah 'GET'
            headers: {
                'Content-Type': 'application/json', // Memberitahu server kita kirim JSON
                // 'Authorization': 'Bearer token123' // Contoh auth header
            },
            body: JSON.stringify(postData) // Convert object JS ke String JSON
        });

        const result = await response.json();
        console.log("3. Created Post:", result);

    } catch (err) {
        console.error("3. Post Failed", err);
    }
}
// createPost();


/* ═══════════════════════════════════════════════
   4. CONCURRENT REQUESTS (PROMISE.ALL)
   ═══════════════════════════════════════════════ */
// Mengambil banyak data SEKALIGUS (Paralel) agar lebih cepat.

async function getMultipleData() {
    try {
        // Mulai semua request bersamaan
        const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1');
        const promise2 = fetch('https://jsonplaceholder.typicode.com/users/2');

        // Tunggu SEMUA selesai
        const responses = await Promise.all([promise1, promise2]);

        // Convert semua ke JSON
        const data = await Promise.all(responses.map(r => r.json()));

        console.log("4. User 1:", data[0].name);
        console.log("4. User 2:", data[1].name);

    } catch (err) {
        console.error("Salah satu request gagal:", err);
    }
}
// getMultipleData();


/* ═══════════════════════════════════════════════
   5. DAFTAR API GRATIS UNTUK LATIHAN
   ═══════════════════════════════════════════════ */
/*
1. JSONPlaceholder (https://jsonplaceholder.typicode.com) - Fake data user, post, todo
2. PokeAPI (https://pokeapi.co) - Data Pokemon
3. Ragam API User (https://randomuser.me) - Generate profil user acak
4. Dog CEO (https://dog.ceo/dog-api/) - Gambar anjing random
*/
