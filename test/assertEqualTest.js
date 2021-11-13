const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('Test cases for assertEqual.js', () => {
  it('"Coders" and "Coders" returns ✅✅✅ Assertion Passed', () => {
    assert.strictEqual(assertEqual("Coders", "Coders"),console.log(`✅✅✅ Assertion Passed: "Coders" === "Coders"`))
  })

  it('"Lighthouse Labs" and "Bootcamp" returns 🛑🛑🛑 Assertion Failed: ', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"),console.log(`🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"`))
  })

  it('1 and 1 returns ✅✅✅ Assertion Passed', () => {
    assert.strictEqual(assertEqual(1, 1),console.log(`✅✅✅ Assertion Passed: "${1}"" === "${1}""`))
  })

  it('5 and 4 returns 🛑🛑🛑 Assertion Failed: ', () => {
    assert.strictEqual(assertEqual(5, 4),console.log(`🛑🛑🛑 Assertion Failed: "${5}" !== "${4}"`))
  })
})