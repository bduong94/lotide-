const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('Test cases for assertArraysEqual', () => {

  it('[1, 2, 3] and [1, 2, 3] returns ✅✅✅ Assertion Passed', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), console.log(`✅✅✅ Assertion Passed: "${[1, 2, 3]}" === "${[1, 2, 3]}"`));
  });
  
  it('[1, 2, 3] and [1, 2, "3"] returns ✅✅✅ Assertion Passed', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, "3"]), console.log(`🛑🛑🛑 Assertion Failed: "${[1, 2, 3]}" !== "${[1, 2, '3']}"`));
  });

});