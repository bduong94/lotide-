const assert = require('chai').assert;
const findKey = require('../findKey');

describe('Tests for findKey', () => {
  it('Returns "noma" for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora":{ stars: 2 }, "Akelarre":  { stars: 3 }} and callback function x => x.stars === 2', () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora":{ stars: 2 }, "Akelarre":  { stars: 3 }}, x => x.stars === 2), "noma");
  });

  it('Returns undefined for object { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora":{ stars: 2 }, "Akelarre":  { stars: 3 }} and callback function x => x.stars === 9', () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora":{ stars: 2 }, "Akelarre":  { stars: 3 }}, x => x.stars === 9), undefined);
  });
});