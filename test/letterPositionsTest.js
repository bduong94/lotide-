const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('Test cases for letterPositions.js', () => {

  it('letterPositions("hello") should return [0] for ["h"]', () => {
    assert.deepEqual(letterPositions("hello")["h"], [0]);
  });

  it('letterPositions("hello") should return [2, 3] for ["h"]', () => {
    assert.deepEqual(letterPositions("hello")["l"], [2, 3]);
  });

  it('letterPositions("lighthouse in the house") should return [0] for ["l"]', () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["l"], [0]);
  });

  it('letterPositions("lighthouse in the house") should return [3, 5, 15, 18] for ["h"]', () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
  });

});