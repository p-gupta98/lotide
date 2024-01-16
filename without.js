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
};

// assertArraysEqual Function
const assertArraysEqual = function(array1, array2) {
  // Call eqArrays function
  let equalBoo = eqArrays(array1, array2);
  if (equalBoo === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (equalBoo === false) {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// without Function
const without = function(sourceArray, itemsToRemoveArray) {
  const newArray = [];
  for (let value of sourceArray) {
    if (itemsToRemoveArray.includes(value)) {
      continue;
    } else {
      newArray.push(value);
    }
  }
  return(newArray);
};


//Test
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

//Test Case

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS

module.exports = without;