const eqObjects = function(object1, object2) {
  let result = false;
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    result = false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] === object2[key]) {
          result = true;
        } else {
          result = false;
        }
      }
    }
  }
  return result;
};

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