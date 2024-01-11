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



//Test Cases

let result = countLetters("hello");
assertEqual(result['h'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 2);
assertEqual(result['o'], 1);

