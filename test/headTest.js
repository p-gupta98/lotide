const head = require('../head');
const assertEqual = require('../assertEqual');

// Test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hellos");
assertEqual(head([]), undefined);

