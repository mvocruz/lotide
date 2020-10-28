const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let message = '';
  if (!eqArrays(actual, expected)) {
    message += console.log(`🛑🛑🛑 Array Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Array Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};

const without = function(source, itemsToRemove) {
  let adjustedArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove) {
      adjustedArray.push(source[i]);
    }
  }
  return adjustedArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
