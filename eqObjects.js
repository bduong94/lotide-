const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) { //Nameless function assigned to the variable eqObjects

  /*
  Parameters
  object1 - an object
  object2 - an object

  Return
  true if the key-value pairs of object1 and object2 are the same
  false if the key-value pairs of object1 and object2 are not the same

  */

  //Check length of object1 and object2 to see if equal
  if (Object.keys(object1).length === Object.keys(object2).length) {


    for (const key in object1) {
      //Check to see if key-value is object && not an array
      if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {

        if (!eqObjects(object1[key], object2[key])){
          return false;
        };

      } else if (Array.isArray(object1[key])) { ///Checks to see if array

        if (!(eqArrays(object1[key], object2[key]))) { //If value is false
          return false;
        }

      } else if (object1[key] !== object2[key]) { //Checks to see if value of the key is the same in both objects
        return false;
      }
    }
    return true; //Passes all tests
  }

  return false;

};

module.exports = eqObjects;