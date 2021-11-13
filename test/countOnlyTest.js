const assert = require('chai').assert;
const countOnly = require('../countOnly');

//Test Case Parameters
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('Test cases for countOnly.js', () => {

  it('["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] should return 1 for "Jason" if counting Jason', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  
  it('["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] should return undefined for "Karima" if counting for Karima', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it('["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"] should return 2 for "Fang" if counting for Fang', () => {
    assert.strictEqual(result1["Fang"], 2);
  });

});