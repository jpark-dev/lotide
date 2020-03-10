const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  console.log(`${inspect(obj1)}`);

  if (eqObjects(obj1, obj2)) {
    return (`✅✅✅ Objects are equal: ${inspect(obj1)} === ${inspect(obj2)}`);

  } else {
    return (`🛑🛑🛑 Objects not equal: ${inspect(obj1)} !== ${inspect(obj2)}`);

  }
};

module.exports = assertObjectsEqual;

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

