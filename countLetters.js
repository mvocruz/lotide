const assertEqual = function(actual, expected) {
  console.log(actual)
  console.log(expected)
  let message = '';
  if (actual !== expected) {
    message += console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    message += console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return message;
};

const countLetters = function(string) {
  const result = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const checkString = "LHL";

console.log(assertEqual(countLetters(checkString), { L: 2, H: 1 }));

