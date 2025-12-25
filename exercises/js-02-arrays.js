// EXERCISE: Array Transformation Challenges

/* 
   CHALLENGE 1: Filter Even Numbers
   Input: [1,2,3,4,5,6]
   Output: [2,4,6]
*/
function filterEven(arr) {
    // TODO
}
// SOLUSI: return arr.filter(num => num % 2 === 0);

console.log(filterEven([1, 2, 3, 4, 5, 6])); // Expected: [2,4,6]


/* 
   CHALLENGE 2: Sum of Array
   Input: [1,2,3,4,5]
   Output: 15
*/
function sumArray(arr) {
    // TODO
}
// SOLUSI: return arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15


/* 
   CHALLENGE 3: Find Max
   Input: [3,7,2,9,1]
   Output: 9
*/
function findMax(arr) {
    // TODO
}
// SOLUSI: return Math.max(...arr);

console.log(findMax([3, 7, 2, 9, 1])); // Expected: 9


/* 
   CHALLENGE 4: Remove Duplicates
   Input: [1,2,2,3,3,3,4]
   Output: [1,2,3,4]
*/
function removeDuplicates(arr) {
    // TODO
}
// SOLUSI: return [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Expected: [1,2,3,4]


/* 
   CHALLENGE 5: Flatten Array
   Input: [[1,2], [3,4], [5,6]]
   Output: [1,2,3,4,5,6]
*/
function flattenArray(arr) {
    // TODO
}
// SOLUSI: return arr.flat(); atau arr.reduce((acc, val) => acc.concat(val), []);

console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // Expected: [1,2,3,4,5,6]


/* 
   CHALLENGE 6: Group by Age
   Input: [{name: 'John', age: 25}, {name: 'Jane', age: 25}, {name: 'Bob', age: 30}]
   Output: {25: [{...}, {...}], 30: [{...}]}
*/
function groupByAge(users) {
    // TODO
}
// SOLUSI:
// return users.reduce((acc, user) => {
//     (acc[user.age] = acc[user.age] || []).push(user);
//     return acc;
// }, {});

const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 30 }
];
console.log(groupByAge(users));
