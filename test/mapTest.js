const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const words2 = [" ground", " control", " to", " major", " tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words, word => word.length);

describe('#map', () => {
  it("should return ['g', 'c', 't', 'm', 't'] from  results1 data", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it("should return [' ', ' ', ' ', ' ', ' '] from results2 data", () => {
    assert.deepEqual(results2, [' ', ' ', ' ', ' ', ' ']);
  });
  it("should return [6, 7, 2, 5, 3] from results4 data", () => {
    assert.deepEqual(results3, [6, 7, 2, 5, 3]);
  });
});

