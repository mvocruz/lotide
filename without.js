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

module.exports = without;
