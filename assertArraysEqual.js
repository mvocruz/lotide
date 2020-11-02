const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let message = '';
  if (!eqArrays(actual, expected)) {
    message += console.log(`🛑🛑🛑 Array Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Array Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};

module.exports = assertArraysEqual;