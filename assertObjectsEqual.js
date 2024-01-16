
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false!
const eqObjects = function(object1, object2) {
  const arrayOne = Object.keys(object1);
  const arrayTwo = Object.keys(object2);
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (const key of arrayOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(arrayOne[key], arrayTwo[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};

// assertObjectsEqual defninition
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //Call eqObjects function
  const equalBoo = eqObjects(actual, expected);
  if (equalBoo === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (equalBoo === false) {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 }) //True

module.exports = assertObjectsEqual;