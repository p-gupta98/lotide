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

// Test calling the function

assertArraysEqual(true, true);
