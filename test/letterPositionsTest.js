const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('should return 0 for given string "hello" and character h', () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it('should return [2,3] for given string "hello" and character l', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it('should return undefined for given string "hello" and charater z', () => {
    assert.deepEqual(letterPositions("hello").z, undefined);
  });
});
