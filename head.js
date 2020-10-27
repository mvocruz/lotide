const assertEqual = function(actual, expected) {
  let message = '';
  if (actual !== expected) {
    message += console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};

const head = function (array1) {
return array1[0];
}

// TEST CODE
assertEqual(head([8]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");