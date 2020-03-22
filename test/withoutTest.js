const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {
  it('should return [2, 3] for given array [1, 2, 3], [1]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return [1] for given array [2, "3"]', () => {
    assert.deepEqual(without([1, 2, "3"], [1]), [2, "3"]);
  });
  it('should return [] for given array [1], [1]', () => {
    assert.deepEqual(without([1], [1]), []);
  });
  it('should return ["hello", "world"] for given array ["hello", "world", "lighthouse"], ["lighthouse"]', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
});
