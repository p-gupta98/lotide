const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2 elements for array length", function(){
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expectedOutput = result.length;
    assert.strictEqual((expectedOutput), 2);
  });

  it("returns 'Lighthouse' for first element of array intead of 'Hello' ", function(){
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expectedOutput = result[0];
    assert.strictEqual((expectedOutput), "Lighthouse");
  });

  it("returns 'Labs' for second element of array intead of 'Lighthouse' ", function(){
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expectedOutput = result[1];
    assert.strictEqual((expectedOutput), "Labs");
  });

  it("returns 0 elements for array length ", function(){
    const resultTwo = tail(["Hello"]);
    const expectedOutput = resultTwo.length;
    assert.strictEqual((expectedOutput), 0);
  });

  it("returns 3 elements for array length - tail does not modify the original array", function(){
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    const expectedOutput = words.length;
    assert.strictEqual((expectedOutput), 3);
  });

});
