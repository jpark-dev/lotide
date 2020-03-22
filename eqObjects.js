const eqObjects = (object1, object2) => {
  // loop object
  for (const key in object1) {
    // check # keys in both object
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }

    // if at least one of current element is an array
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      // check length of array
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      // loop through array and compare values
      for (const el in object1[key]) {
        if (object1[key][el] !== object2[key][el]) {
          return false;
        }
      }
    }
    // only objects from here (no arrays)

    // if both values are object, recurse
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      eqObjects(object1[key], object2[key]);
      
      // if at least one of values is not an object, compare the values
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  // if no checks, return true
  return true;

};

module.exports = eqObjects;
