const eqArrays = function (arr1, arr2){

  if (arr1.length !== arr2.length){
    return false;
  }

  for (i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`);

  } else {
    console.log(`🛑🛑🛑 Arrays not equal: ${arr1} !== ${arr2}`);
  }
}; 

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);