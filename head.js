// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Head Function Implementation

const head = function(array, firstElement) {
  
  if (array.length === 0) {
    console.log("undefined")
  }
  return array[0];
};

// Test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hellos");
assertEqual(head([], 5));