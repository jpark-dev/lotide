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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {

    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }

    if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  console.log(`${inspect(obj1)}`);

  if (eqObjects(obj1, obj2)) {
    return (`✅✅✅ Objects are equal: ${inspect(obj1)} === ${inspect(obj2)}`);

  } else {
    return (`🛑🛑🛑 Objects not equal: ${inspect(obj1)} !== ${inspect(obj2)}`);

  }
};


// // TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(assertObjectsEqual(ab, ba)); // => true
console.log(assertObjectsEqual(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false
