const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('Test cases of countLetters', () => {

  it('"lighthouse in the house" should return 4 for ["h"]', () => {
    assert.strictEqual(countLetters("lighthouse in the house")["h"], 4);
  });

  it('"lighthouse in the house" should return undefined for [" "]', () => {
    assert.strictEqual(countLetters("lighthouse in the house")[" "], undefined);
  });

});