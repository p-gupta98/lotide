const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2 elements for array length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  //assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);

  it("returns 'Lighthouse' for first element of array", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });

  it("returns 'Labs' for second element of array", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], 'Labs');
  });

  it("returns 0 elements for array length", () => {
    assert.strictEqual(tail(["Hello"]).length, 0);
  });

  it("returns 3 elements for array length - tail does not modify the original array", function(){
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    const expectedOutput = words.length;
    assert.strictEqual((expectedOutput), 3);
  });

});
