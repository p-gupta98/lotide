const eqArrays = require('./eqArrays');


// assertArraysEqual Function

const assertArraysEqual = function(array1, array2) {
  // Call eqArrays function
  let equalBoo = eqArrays(array1, array2);
    if (equalBoo === true) {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else if (equalBoo === false) {
      console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
    }
}

// Test calling the function

assertArraysEqual(true, true);

module.exports = assertArraysEqual;
