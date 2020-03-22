const countLetters = require('../countLetters');

const assert = require('chai').assert;

describe('#countLetters', () => {
  it('should return 3 from given object "LHL', () => {
    assert.deepEqual(countLetters("LHL"), {L:2, H:1});
  });
  it('should return original parameter "lighthouselabs" from given boolean true', () => {
    assert.strictEqual(countLetters(true), true);
  });
  it('should return original parameter 0 from given number 0', () => {
    assert.strictEqual(countLetters(0), 0);
  });
  it('should return original parameter null from given falsey null', () => {
    assert.deepEqual(countLetters(null), null);
  });

});
