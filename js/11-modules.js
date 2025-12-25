// W3SCHOOLS: JAVASCRIPT MODULES (ES6 Import/Export)

/* ═══════════════════════════════════════════════
   PENGENALAN MODULES
   ═══════════════════════════════════════════════ 
   
   Module memungkinkan kita memecah kode JavaScript ke banyak file terpisah.
   Ini membuat kode lebih rapi, mudah dimaintain, dan reusable.
   
   SYARAT WAJIB:
   1. Harus dijalankan via SERVER (Live Server, Localhost, HTTPS).
      Tidak jalan jika buka file HTML langsung (file://).
   2. Di HTML, script tag harus punya type="module":
      <script type="module" src="main.js"></script>
*/


/* ═══════════════════════════════════════════════
   1. Named Exports (Export dengan Nama)
   ═══════════════════════════════════════════════ */
/* 
Satu file bisa punya BANYAK Named Export.
Nama variable saat import HARUS SAMA (kecuali pakai alias 'as').
*/

// --- File: mathUtils.js ---
// export const PI = 3.14159;
// 
// export function add(a, b) {
//     return a + b;
// }

// --- File: main.js (IMPORT) ---
// import { PI, add } from './mathUtils.js';
// console.log(add(2, 3));


/* ═══════════════════════════════════════════════
   2. Default Export (Export Utama)
   ═══════════════════════════════════════════════ */
/* 
Satu file HANYA BOLEH punya SATU Default Export.
Biasanya digunakan untuk export class utama atau komponen.
Namanya saat import BEBAS.
*/

// --- File: User.js ---
// export default class User {
//     constructor(name) { this.name = name; }
// }

// --- File: main.js (IMPORT) ---
// import UserMember from './User.js'; // Nama bebas, tanpa kurung kurawal {}
// const u = new UserMember("Budi");


/* ═══════════════════════════════════════════════
   3. Mixed Exports (Gabungan)
   ═══════════════════════════════════════════════ */
/* 
Sebuah file bisa punya 1 Default Export DAN banyak Named Export.
*/

// --- File: logger.js ---
// export default function log(msg) { console.log(msg); } // Default
// export function warn(msg) { console.warn(msg); }       // Named

// --- File: main.js ---
// import log, { warn } from './logger.js';


/* ═══════════════════════════════════════════════
   4. Dynamic Import (Async Import)
   ═══════════════════════════════════════════════ */
/* 
Import file hanya saat dibutuhkan (Lazy Loading).
Ini menghemat bandwidth dan mempercepat load awal.
*/

// document.getElementById('btnLoad').addEventListener('click', async () => {
//     // Modul 'chart.js' hanya didownload browser saat tombol diklik!
//     const module = await import('./chart.js');
//     module.drawChart();
// });


/* ═══════════════════════════════════════════════
   5. Module Scope STRICT
   ═══════════════════════════════════════════════ */
/*
- Variable di dalam module TIDAK BOCOR ke Global Scope (Window).
- "this" di top level module adalah undefined.
- Module otomatis berjalan dalam "use strict" mode.
*/


/* ═══════════════════════════════════════════════
   6. OLD WAY (MODULE PATTERN - IIFE)
   ═══════════════════════════════════════════════ */
/*
Sebelum ES6 (2015), orang pakai IIFE untuk meniru module privacy.
Jarang dipakai di kode modern, tapi bagus untuk pengetahuan sejarah.
*/

const CalculatorModule = (function () {
   let privateCount = 0; // Tidak bisa diakses dari luar

   return {
      add: function (n) { privateCount += n; },
      getResult: function () { return privateCount; }
   };
})();

// CalculatorModule.add(5);
// console.log(CalculatorModule.getResult());
