// EXERCISE: String Manipulation Challenges

/* 
   CHALLENGE 1: Reverse String
   Balik string "Hello" → "olleH"
*/
function reverseString(str) {
    // TODO: Tulis kode di sini
}
// SOLUSI: return str.split('').reverse().join('');

console.log(reverseString("Hello")); // Expected: "olleH"


/* 
   CHALLENGE 2: Count Vowels
   Hitung jumlah huruf vokal (a,e,i,o,u) dalam string
*/
function countVowels(str) {
    // TODO
}
// SOLUSI:
// const vowels = 'aeiouAEIOU';
// return str.split('').filter(char => vowels.includes(char)).length;

console.log(countVowels("Hello World")); // Expected: 3


/* 
   CHALLENGE 3: Capitalize Words
   "hello world" → "Hello World"
*/
function capitalizeWords(str) {
    // TODO
}
// SOLUSI:
// return str.split(' ').map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)
// ).join(' ');

console.log(capitalizeWords("hello world")); // Expected: "Hello World"


/* 
   CHALLENGE 4: Palindrome Check
   Cek apakah string adalah palindrome (sama dari depan/belakang)
*/
function isPalindrome(str) {
    // TODO
}
// SOLUSI:
// const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
// return cleaned === cleaned.split('').reverse().join('');

console.log(isPalindrome("madam")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false


/* 
   CHALLENGE 5: Remove Duplicates
   Hapus karakter duplikat dari string
*/
function removeDuplicates(str) {
    // TODO
}
// SOLUSI:
// return [...new Set(str)].join('');

console.log(removeDuplicates("hello")); // Expected: "helo"
