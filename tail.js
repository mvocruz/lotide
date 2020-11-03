const tail = function (array) {
  let tailNumbers = [];
  for (i = 1; i < array.length; i++) {
    tailNumbers.push(array[i]);
  }
  return tailNumbers;
}


module.exports = tail;