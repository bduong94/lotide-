const assert = require('chai').assert;
const tail = require("../tail");

describe('tail.js tests', () => {

  it('returns "["Lighthouse", "Labs"]" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('Array ["Yo Yo", "Lighthouse", "Labs"] should not mutate after tail(["Yo Yo", "Lighthouse", "Labs"]', () =>{
    let testArr = ["Yo Yo", "Lighthouse", "Labs"];
    tail(testArr);
    assert.deepEqual(testArr, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('returns [] for [""]', () => {
    assert.deepEqual(tail([""]), []);
  });

  it('returns [] for ["one"]', () => {
    assert.deepEqual(tail(["one"]), []);
  });

});