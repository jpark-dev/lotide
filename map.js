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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = [" ground", " control", " to", " major", " tom"];

const map = (array, callback) => {
  
  const results = [];
  
  for (const elem of array) {
    results.push(callback(elem));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words2, word => word[word.length - 1]);
const results4 = map(words, word => word.length);

console.log(results1);


// TEST CASES
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, [' ', ' ', ' ', ' ', ' ']));
console.log(assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']));

// This shouldn't pass test as arrays === arrays is always false
console.log(assertArraysEqual(results4, ['6', '7', '2', '5', '3']));
