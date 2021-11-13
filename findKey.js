const findKey = function(testObject, callback) { //Nameless function assigned to the variable findKey

  /*
  Parameters
  testObject - Object to test
  callback - callback function

  Return
  key from testObject that returns a truthy value from the callback
  */

  for (const key in testObject) { //Iterates over all keys in the testObject

    if (callback(testObject[key])) { //Tests to see if truthy value found

      return key; //

    }

  }

  return undefined; //No key found for the value

};

module.exports = findKey;