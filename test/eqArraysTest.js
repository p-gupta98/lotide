const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//Test Case
//Function call
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 6]), true); // => should FAIL