const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let result = false;
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    result = false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          result = false;
          break;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
};

module.exports = eqObjects;