const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  //Nameless function assigned to the variable assertArraysEqual

  let result = eqArrays(arr1, arr2);

  if (result) {
    //Compares variables actual and expected to see if they are equal

    return console.log(`✅✅✅ Assertion Passed: "${arr1}" === "${arr2}"`); //Prints out pass message with Template Literals
  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`); //Prints out fail message with Template Literals
};

module.exports = assertArraysEqual;
