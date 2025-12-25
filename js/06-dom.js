/* 
═══════════════════════════════════════════════════════════
W3SCHOOLS: HTML DOM (Document Object Model)
═══════════════════════════════════════════════════════════

DI BAB INI KAMU AKAN BELAJAR:
1. Konsep DOM (Pohon Elemen HTML dalam Memory)
2. Mencari Elemen (Selectors)
3. Mengubah Konten & Style (Manipulation)
4. Handling Events (Click, Input, etc)
5. Membuat & Menghapus Nodes (Dynamic Elements)
*/


/* ═══════════════════════════════════════════════
   1. APA ITU DOM?
   ═══════════════════════════════════════════════ */

/*
Saat browser meload halaman web, browser membuat "DOM".
DOM adalah representasi OBJECT dari seluruh HTML.
Dengan DOM, JavaScript punya kekuatan penuh untuk membuat HTML yang dinamis:
- Mengubah elemen apapun di halaman
- Mengubah atribut apapun
- Mengubah style CSS apapun
- Bereaksi terhadap event user
*/


/* ═══════════════════════════════════════════════
   2. FINDING HTML ELEMENTS (SELECTORS)
   ═══════════════════════════════════════════════ */

/* Cara Lama (Masih Valid & Cepat) */
const elId = document.getElementById("intro");
// Ambil 1 elemen dengan id="intro" (Paling Cepat)

const elTag = document.getElementsByTagName("p");
// Ambil SEMUA elemen <p> (Return: HTMLCollection / Array-like)

const elClass = document.getElementsByClassName("intro");
// Ambil SEMUA elemen dengan class="intro"

/* Cara Modern (Flexible - Pakai CSS Selector) - RECOMMENDED */
const elQuery = document.querySelector("p.intro");
// Ambil elemen PERTAMA yang cocok dengan selector "p.intro"

const elQueryAll = document.querySelectorAll("p.intro");
// Ambil SEMUA elemen yang cocok (Return: NodeList)


/* ═══════════════════════════════════════════════
   3. CHANGING HTML CONTENT & ATTRIBUTES
   ═══════════════════════════════════════════════ */

/* Mengubah Isi Text/HTML */
// innerHTML mengubah isi dalam tag, termasuk tag HTML anak
document.getElementById("p1").innerHTML = "New text!";
// innerText hanya mengubah text (aman dari XSS)
// document.getElementById("p1").innerText = "Text Only";

/* Mengubah Atribut Tag */
// Format: element.attribute = value
document.getElementById("img1").src = "landscape.jpg"; // Ganti gambar
document.getElementById("input1").value = "Isian Baru"; // Isi form
document.getElementById("link1").href = "https://google.com"; // Ganti link


/* ═══════════════════════════════════════════════
   4. CHANGING CSS STYLES
   ═══════════════════════════════════════════════ */

/* Syntax: document.getElementById(id).style.property = new style */
// Note: Property CSS pakai camelCase (font-size jadi fontSize)

const p2 = document.getElementById("p2");
p2.style.color = "blue";
p2.style.fontSize = "30px";
p2.style.backgroundColor = "yellow";
p2.style.display = "none"; // Menyembunyikan elemen


/* ═══════════════════════════════════════════════
   5. DOM EVENTS (INTERAKSI USER)
   ═══════════════════════════════════════════════ */

/* 
Event = Kejadian yang terjadi pada elemen HTML.
Contoh: click, mouseover, keydown, load, change.
*/

/* CARA 1: HTML Attributes (KURANG DISARANKAN) */
// <button onclick="displayDate()">Click me</button>

/* CARA 2: Event Listener (RECOMMENDED - MODERN & BERSIH) */
// element.addEventListener("event", function)

const btn = document.getElementById("myBtn");

btn.addEventListener("click", displayDate);
// Note: Jangan pakai displayDate() dengan kurung, cukup nama fungsinya.

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// Event Mouse Over
btn.addEventListener("mouseover", function () {
    console.log("Mouse masuk!");
});


/* ═══════════════════════════════════════════════
   6. DOM NODES (CREATE & REMOVE ELEMENTS)
   ═══════════════════════════════════════════════ */

// 1. Buat elemen baru (<p>)
const para = document.createElement("p");

// 2. Buat isi text-nya
const node = document.createTextNode("This is new.");

// 3. Masukkan text ke dalam <p>
para.appendChild(node);

// 4. Masukkan <p> ke dalam elemen yang sudah ada (<div>)
const element = document.getElementById("div1");
element.appendChild(para); // Append = taruh di paling bawah (anak terakhir)

/* Menghapus Element */
// element.remove(); // Cara modern
// element.parentNode.removeChild(element); // Cara lama
