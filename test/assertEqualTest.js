const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true if 2 === 2", () => {
    assert.isTrue(assertEqual(2, 2));
  });
  it("returns true if 'Hello' === 'Hello'", () => {
    assert.isTrue(assertEqual('Hello', 'Hello')); 
  });
  it("returns false if 10 !== 5", () => {
    assert.isFalse(assertEqual(10, 5)); 
  });

});
