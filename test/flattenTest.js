const assert = require('chai').assert;
const flatten = require('../flatten');

describe('Test case for flatten', () =>{

  it('flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6] should equal [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
  });

});