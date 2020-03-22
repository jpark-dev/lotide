const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {
  it('should return 1 with given object { "Jason": true, "Karima": true, "Fang": true }', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('should return undefined with given object { "Jason": true, "Karima": true, "Fang": true }', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('should return 2 with given object { "Jason": true, "Karima": true, "Fang": true }', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
});
