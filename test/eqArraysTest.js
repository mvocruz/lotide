const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it("returns true if [1, 2, 3] === [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns true if [1] === [1]", () => {
    assert.isTrue(eqArrays([5], [5])); 
  });
  it("returns false if ['H', 'L'] !== ['L', 'H', 'L']", () => {
    assert.isFalse(eqArrays(['L', 'H', 'L'], ['H', 'L'])); 
  });

});
