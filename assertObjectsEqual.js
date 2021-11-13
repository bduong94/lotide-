const eqObjects = require('./eqObjects');

const assertObjectEqual = function(actual, expected) { //Nameless function assigned to the variable
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);

  if (result) { //Checks to see if true

    return console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`); //Prints out pass message with Template Literals

  }

  return console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`); //Prints out fail message with Template Literals

};

module.exports = assertObjectEqual;