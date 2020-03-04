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

const letterPositions = function(sentence) {
  const results = {};
  let cnt = 0;
  for (const char of sentence) {
    if (results[char]) {
      results[char].push(cnt);
    } else {
      results[char] = [cnt];
    }
    cnt++;
  }
  return results;
};


// TEST CODE

console.log(letterPositions("hello"));
console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4]));