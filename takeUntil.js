const takeUntil = function(array, callback) {
  let newArray = [];
  for (let num of array) {
    if (callback(num)) {
      return newArray;
    } else {
      newArray.push(num);
    }
  }
  return newArray;
};


module.exports = takeUntil;