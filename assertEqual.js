const assertEqual = function(actual, expected) {
  let message = '';
  if (actual !== expected) {
    message += console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};



module.exports = assertEqual;