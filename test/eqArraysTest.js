const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe('Test cases for eqArrays', () =>{

  it('[1, 2, 3] and [1, 2, 3] should return true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('[1, 2, 3] and [1, 2, "3"] should return false', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
  });

  it('[1, 2, "3"] and [1, 2, "3"] should return true', () => {
    assert.strictEqual(eqArrays([1, 2, "3"], [1, 2, "3"]), true);
  });

  it('[1, 2, "3"] and [1, 2] should return false', () => {
    assert.strictEqual(eqArrays([1, 2, "3"], [1, 2]), false);
  });
  
  it('[[2, 3], [4]] and [[2, 3], [4]] should return true', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('[[2, 3], [4]] and [[2, 3], [4, 5]] should return false', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('[[2, 3], [4]] and [[2, 3], 4] should return false', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});