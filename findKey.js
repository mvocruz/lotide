const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  const getKeys = Object.keys(object);
  for (let key of getKeys) {
    const cbParam = object[key];
    if (callback(cbParam)) {
      return key;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

console.log(result);

assertEqual(result, "noma");

module.exports = findKey;