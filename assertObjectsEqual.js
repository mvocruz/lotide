const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = '';
  if (!eqObjects(actual, expected)) {
    message += console.log(`🛑🛑🛑 Object Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    message += console.log(`✅✅✅ Object Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  return message;
};

console.log(assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3] }));

module.exports = assertObjectsEqual; 