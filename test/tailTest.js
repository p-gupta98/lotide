const tail = require('../tail');
const assertEqual = require('../assertEqual');


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements
const resultTwo = tail(["Hello"]);
assertEqual(resultTwo.length, 0); // ensure we get back zero elements

//Test
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);