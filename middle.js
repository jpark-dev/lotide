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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`);

  } else {
    console.log(`🛑🛑🛑 Arrays not equal: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {

  let midIndex = Math.ceil(arr.length / 2 - 1);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i >= 2) {
      if (arr.length % 2 === 0) {
        result.push(arr[midIndex], arr[midIndex + 1]);
        break;

      } else {
        result.push(arr[midIndex]);
        break;
      }
    }

  }
  return result;

};

// CODE TEST

// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));

// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// console.log(middle([1]));
// console.log(middle([1, 2]));