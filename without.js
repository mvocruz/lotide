const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = without;
