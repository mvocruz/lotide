const countOnly = function(allItems, itemsToCount) {
  let countResult = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (countResult[item]) {
        countResult[item] += 1; 
      } else {
        countResult[item] = 1; 
      }
    } 
  }
  return countResult;
};

module.exports = countOnly;