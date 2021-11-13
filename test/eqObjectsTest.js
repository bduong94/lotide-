const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('Tests for eqObjects', () => {

  it('{a: "1", b: "2"} and {b: "2", a: "1"} should return true', () => {
    assert.strictEqual(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}), true);
  })

  it('{a: "1", b: "2"} and {a: "1", b: "2", c: "3"} should return false', () => {
    assert.strictEqual(eqObjects({a: "1", b: "2"}, {a: "1", b: "2", c: "3"}), false);
  })

  it('{ c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" } should return true', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  })
  
  it('{ c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] } should return false', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  })

  it('{ a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } should return true', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  })

  it('{ a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 3 } should return false', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false);
  })

  it('{ a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } should return true', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  })

  it('{ a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 } should return true', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  })

});