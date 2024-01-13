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

const takeUntil = function(array, callback) {
  const result = [];

  for (item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }  
  return result;
};

//Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

//Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);


// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]