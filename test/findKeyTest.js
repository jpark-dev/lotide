const findKey = require('../findKey');
const assert = require('chai').assert;
const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

describe('#findKeyTest', () => {
  it('should return "noma" for given function x => x.stars === 2', () => {
    assert.strictEqual(findKey(data, x => x.stars === 2), "noma");
  });
  it('should return "Blue Hill" for given function x => x.stars !== 2', () => {
    assert.strictEqual(findKey(data, x => x.stars !== 2), "Blue Hill");
  });
  it('should return "Akaleri" for given function x => x.stars > 2', () => {
    assert.strictEqual(findKey(data, x => x.stars > 2), "Akaleri");
  });
  it('should return "n" for given function x => x.stars > 3', () => {
    assert.strictEqual(findKey(data, x => x.stars > 3), "");
  });
});
