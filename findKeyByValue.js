const findKeyByValue = function(obj, value) {
  for (const name in obj) {
    if (obj[name] === value) {
      return name;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
