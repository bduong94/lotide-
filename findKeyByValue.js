const findKeyByValue = function(objectToTest, value) {

  /*
  Parameter
  objectToTest - an object with key-value pairs to test
  value - element used to find the key in objectToTest

  Returns
  The key in objectToTest if value is found, otherwise returns undefined
  */

  //Iterate over keys
  for (const key in objectToTest) {

    if (objectToTest[key] === value) { //Check if value for key is the same, return key

      return key;

    }
  }

  return undefined; //If key not found, return undefined

};

module.exports = findKeyByValue;