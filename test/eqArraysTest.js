const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArraysTest', () => {
  it('should return true for given arrays [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false for given arrays [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('should return true for given arrays ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('should return false for given arrays ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it('should return false for given arrays [[2, 3], [4]], [[2, 3], [4, 5]]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it('should return true for given arrays [[2, 3], [4]], [[2, 3], [4]]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});

