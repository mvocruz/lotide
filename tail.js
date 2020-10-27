const assertEqual = function(actual, expected) {
  let message = '';
  if (actual !== expected) {
    message += console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};

const tail = function (array) {
  let tailNumbers = [];
  for (i = 1; i < array.length; i++) {
    tailNumbers.push(array[i]);
  }
  return tailNumbers;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
const toCompare =  ["Lighthouse", 1];
assertEqual(result.join(), toCompare.join()); 