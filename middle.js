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

// Middle Function

const middle = function(array) {
  const middleIndex = (array.length - 1) / 2;
  const evenIndexOne = (array.length) / 2;
  const evenIndexTwo = evenIndexOne - 1;
  const newArray = [];
  if (array.length === 1 || array.length === 2) {
    newArray.push();
  } else if (array.length % 2 !== 0) {
    newArray.push(array[middleIndex]);
  } else {
    newArray.push(array[evenIndexTwo], array[evenIndexOne]);
  }
  return (newArray);
}

middle([1,2,3]);
middle([1,2]);
middle([1,2,3,4,5,6]);


// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]); //Should Pass
assertArraysEqual(middle(["Hello", "Light", "House"]), ["Light"]); //Shoudl Pass