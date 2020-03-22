const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe('#eqObjectsTest', () => {
  it('should return true for given objects ab, ba', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('should return false for given objects ab, abc', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('should return true for given objects cd, dc', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('should return true for given objects { a: { z: 1 }, b: 2 } { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('should return true for given objects { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
  assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});

// Should update to support nested objects using recursive.
// currently only compares objects with one object inside.
// it('should return true for given objects { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
//   assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// })
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)) // => false
// // console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)) // => false


// // console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, m: { d: 9, e: { j: 7, q: 4, f: { p: 1, b: 2 }}, {a: 3}), false)) // => false
