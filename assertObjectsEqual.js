const eqArrays = function(arr1, arr2) { //Nameless function assigned to the variable eqArrays

  /*
  Parameters
  arr1 - array of elements
  arr2 - array of elements

  Returns
  True if all elements are equal
  False if any of the elements are not equal
  */

  if (arr1.length !== arr2.length) { //Check to see if both arrays are equal length

    return false;

  }

  for (let i = 0; i < arr1.length; i++) { //Iterates over the length of arr1

    if (arr1[i] !== arr2[i]) { //Checks at the same index for both arrays if the elements are equal

      return false;

    }
  }

  return true; //Passes all tests, elements are equal
};

const eqObjects = function(object1, object2) { //Nameless function assigned to the variable eqObjects

  /*
  Parameters
  object1 - an object
  object2 - an object

  Return
  true if the key-value pairs of object1 and object2 are the same
  false if the key-value pairs of object1 and object2 are not the same

  */

  //Check Length of object1 and object2

  if (Object.keys(object1).length === Object.keys(object2).length) { //Compares length of each array

    for (const key in object1) {

      if (Array.isArray(object1[key])) { ///Checks to see if array
        
        console.log(Array.isArray(object1[key]));

        if (!(eqArrays(object1[key], object2[key]))) { //If value is false
          return false;
        }

      } else if (object1[key] !== object2[key]) { //Checks to see if value of the key is the same in both objects
        return false;
      }

    }

    return true; //Passes all tests

  }

  return false; //Fails all tests
};

const assertObjectEqual = function(actual, expected) { //Nameless function assigned to the variable
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);

  if (result) { //Checks to see if true

    return console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`); //Prints out pass message with Template Literals

  }

  return console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`); //Prints out fail message with Template Literals

};

//Test Case
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

assertObjectEqual(ab, ba);