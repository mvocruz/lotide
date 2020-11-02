const assertEqual = require('./assertEqual');

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
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;