const findKey = function(object, callback) {
  const getKeys = Object.keys(object);
  for (let key of getKeys) {
    const cbParam = object[key];
    if (callback(cbParam)) {
      return key;
    }
  }
};


module.exports = findKey;