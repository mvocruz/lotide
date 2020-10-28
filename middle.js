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

const middle = function (array) {
const length = array.length  
const middleArray = [];
if (length <= 2) {
  middleArray.push()
}
if (length > 2 && length % 2 === 0) {
  const middleEven = Math.floor((length - 1) / 2);
  middleArray.push(array[middleEven]);
  middleArray.push(array[middleEven + 1]);
}
if (length > 2 && length % 2 !== 0) {
  const middleEven = Math.floor(length / 2);
  middleArray.push(array[middleEven]);
}
return middleArray
}

console.log(assertArraysEqual(middle([1, 5, 9, 4, 11, 12]), [9, 4]));
console.log(assertArraysEqual(middle([1, 2, 3]), []));
console.log(assertArraysEqual(middle([1, 2, 10, 10, 19, 4, 5]),[10]));
