const eqArrays = function(arr1, arr2) {

  for (const el in arr1) {
    if (arr1[el].length !== arr2[el].length) {
      return false;
    }
    if (Array.isArray(arr1[el])) {
      eqArrays(arr1[el], arr2[el]);
    } else {
      if (arr1.length !== arr2.length || arr1[el] !== arr2[el]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;
