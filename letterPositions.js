const eqArrays = function(array1, array2) {
  console.log(array1, array2);
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        const oldArray = results[sentence[i]];
        results[sentence[i]] = [...oldArray,i];
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

const string = 'hello';
console.log(letterPositions(string));

console.log(assertArraysEqual(letterPositions(string).e, 1));