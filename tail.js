const assertEqual = require('./assertEqual');

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

module.exports = tail;