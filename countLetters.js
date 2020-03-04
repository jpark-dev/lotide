// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {

  if (typeof str !== 'string') {
    return str;
  
  }

  let count = {};

  for (const char of str) {
    if (count[char]) {
      count[char]++;

    } else {
      count[char] = 1;
    
    }
  }
  return count;

};


console.log(countLetters("lighthouselabs"));
console.log(countLetters("LHL"));
console.log(countLetters(true));
console.log(countLetters(0));
console.log(countLetters(null));

