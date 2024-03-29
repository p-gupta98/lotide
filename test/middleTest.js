const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns '[]' for [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns 'Light' for ['Hello', 'Light', 'House']", () => {
    assert.deepEqual(middle(['Hello', 'Light', 'House']), ['Light']);
  });

  it("returns '[2,3]' for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("returns '[]' for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

});


