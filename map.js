// eqArrays function 

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  
}

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

// Map function
const map = function (array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));

  }
  return results;
} 

//Test Case 1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

//Test Case 2
const food = ["pizza", "burger", "ramen", "noodle soup"];
const length = map(food, word => word.length);
assertArraysEqual(length, [ 5, 6, 5, 11 ]);

//Test Case 3
const num = [2, 5, 7, 11, 4];
const addOne = map(num, number => number += 1);
assertArraysEqual(addOne, [ 3, 6, 8, 12, 5 ]);

