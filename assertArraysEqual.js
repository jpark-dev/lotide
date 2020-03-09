// pair programming with Jas @J-sabharwal
const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: ${arr1} === ${arr2}`);

  } else {
    console.log(`🛑🛑🛑 Arrays not equal: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
