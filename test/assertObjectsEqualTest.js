const assert = require('chai').assert;
const assertObjectEqual = require('../assertObjectsEqual');
const inspect = require('util').inspect;

describe('Tests for assertObjectsEqual', () => {
  it('{a: "1", b: "2"} and {b: "2", a: "1"} should return ✅✅✅ Assertion Passed:', () => {
    assert.strictEqual(assertObjectEqual({a: "1", b: "2"}, {a: "1", b: "2"}, `✅✅✅ Assertion Passed: "${inspect({a: "1", b: "2"})}" === "${inspect({a: "1", b: "2"})}"`));
  });
});