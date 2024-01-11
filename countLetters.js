// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (const letter of string) {
    if (letter === " ") {
      continue;
    }
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};



// //Test Cases
// assertEqual(countLetters("hello"), {'h': 1, 'e': 1, 'l': 2, 'o': 1}); //Should Pass
// assertEqual(countLetters("hello dog"), {h: 1, e: 1, l: 2, o: 2, d: 1, g: 1}); // Should pass