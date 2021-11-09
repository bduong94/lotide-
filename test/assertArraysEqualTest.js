const assertArraysEqual = require('../assertArraysEqual');

//Test Case
assertArraysEqual([1, 2, 3], [1, 2, 3]); //All elements are equal
assertArraysEqual([1, 2, 3], [1, 2, '3']); //One element is differArraysent
assertArraysEqual([1, 2, '3'], [1, 2, '3']); //Checks string and integers
assertArraysEqual([1, 2, '3'], [1, 2]); //Checks different lengths