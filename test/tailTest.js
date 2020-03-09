const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE WHICH WILL ALWAYS FAIL, CANNOT COMPARE ARRAYS WITH OPERATORS LIKE '==='
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


// LHL WORKAROUND ARRAY COMPARISON WITH OPERATOR LIMITATION

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
// ...



// MY WORKAROUND
// add .join() function to concatenate the return array of tail function and expected array.

// const tail = function(arr) {
//   let newArr = [];
  
//   for (i = 1; i < arr.length; i++){
//     newArr.push(arr[i]);
//   }

//   console.log(newArr.join());
//   return newArr.join();
// }


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"].join());



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// Test Case: For an array with only one element
const oneElemArray = tail(["Only Element"]); // array with only one element
assertEqual(oneElemArray.length, 0); // should be an empty array;

// Test Case: For an empty array
const zeroElemArray = tail([]); // array with only one element
assertEqual(zeroElemArray.length, 0); // should be an empty array;
