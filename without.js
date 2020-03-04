const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`);

  } else {
    console.log(`🛑🛑🛑 Arrays not equal: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {

  let result = [];
  
  for (let i = 0; i < source.length; i++) {
    let isRemoveable = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isRemoveable = true;
      }
    }
    if (isRemoveable === false) {
      result.push(source[i]);
    
    }
  }
  return result;

};


// TEST CODE
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
// console.log(assertArraysEqual(without([1, 2, "3"], [1]), [2, "3"]));
// console.log(assertArraysEqual(without([1], [1]), []));
// console.log(assertArraysEqual(without([1, 2, true], [false]), [1, 2, true]));
// console.log(assertArraysEqual(without([1, "hello", 3], [1, 3]), ["hello"]));



// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);