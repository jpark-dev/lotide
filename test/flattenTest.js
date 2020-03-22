const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] for given array [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('should return [] for given array []', () => {
    assert.deepEqual(flatten([]), []);
  });
  it('should return [6, 5, 4, 3, 2, 1] for given array [6, 5, [4, [3, 2], 1]]', () => {
    assert.deepEqual(flatten([6, 5, [4, [3, 2], 1]]), [6, 5, 4, 3, 2, 1]);
  });
});
