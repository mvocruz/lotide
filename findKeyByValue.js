const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let finalKey;
  const getKeys = Object.keys(object);
  for (let key of getKeys) {
    if (object[key] === value) {
      finalKey = key;
    }
  }
  return finalKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;