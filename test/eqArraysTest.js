const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//Test Case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //All elements are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); //One element is different
assertEqual(eqArrays([1, 2, '3'], [1, 2, '3']), true); //Checks string and integers
assertEqual(eqArrays([1, 2, '3'], [1, 2]), true); //Checks different lengths