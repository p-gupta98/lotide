const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]); //Should Pass
assertArraysEqual(middle([1,2]), []); //Should Pass
assertArraysEqual(middle(["Hello", "Light", "House"]), ["Light"]); //Shoudl Pass
