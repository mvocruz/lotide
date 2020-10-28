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
// TEST CODE
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,0], [1,2,3]);