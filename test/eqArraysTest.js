const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//Test Case


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 6]), false); // => should FAIL