const middle = function(array) {
  const length = array.length;
  const middleArray = [];
  if (length <= 2) {
    middleArray.push();
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
  return middleArray;
};


module.exports = middle;
