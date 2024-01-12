// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a false!
const eqObjects = function(object1, object2) {
  const arrayOne = Object.keys(object1);
  const arrayTwo = Object.keys(object2);
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (const key of arrayOne) {
    if (Array.isArray(arrayOne.key) && Array.isArray(arrayTwo.key)) {
      eqArrays(arrayOne.key, arrayTwo.key);
    } else if (object1.key !== object2.key) {
      return false
    }
  }
  return true;
};

//Test 
const songObject = { album: ["red", "Fearless"], artist: "Taylor Swift" };
const anotherSongObject= { artist: "Taylor Swift", album: ["red", "Fearless"] };
assertEqual(eqObjects(songObject, anotherSongObject), true); // => true

const popularSongObject= { artist: "Taylor Swift", album: ["red", "Fearless"], songName: "Begin Again" };
assertEqual(eqObjects(songObject, popularSongObject), false); // => false