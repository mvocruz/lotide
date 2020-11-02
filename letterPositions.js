const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;