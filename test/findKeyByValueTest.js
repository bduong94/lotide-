const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('Test cases for findKeyByValue', () => {

  it('{sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"} should return "drama" for "The Wire"', () => {
    assert.strictEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, "The Wire"), "drama");
  });

  it('{sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"} should return undefined for "That \'70s Show"', () => {
    assert.strictEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"}, "That '70s Show"), undefined);
  });

});