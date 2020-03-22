const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3, "4"] };
const dc = { d: ["2", 3, "4"], c: "1" };

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
  it('should return true for given objects { a: { z: 1 }, b: 2 } { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('should return true for given objects { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

});
