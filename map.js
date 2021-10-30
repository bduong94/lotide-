const assertArraysEqual = function(arr1, arr2) { //Nameless function assigned to the variable assertArraysEqual

  let result = eqArrays(arr1, arr2);

  if (result) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${arr1}" === "${arr2}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`); //Prints out fail message with Template Literals

};

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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(listOfElements, callback) { //Nameless function assigned to the variable map

  /*
  Parameter
  listOfElements - array of elements
  callback - call back function that will accept an input

  Return
  Call back function that will take elements from listOfElements
  */

  const results = [];

  for (let element of listOfElements) { //Iterates over list of elements

    results.push(callback(element));

  }

  return results;

};

//Test Case

const result1 = map(words, word => word[0]);
console.log(result1);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);

const result2 = map([6, 3, 4], ele => ele + 3);
console.log(result2);
assertArraysEqual(result2, [9, 6, 7]);

const result3 = map([15, 10, 5], ele => ele / 5);
console.log(result3);
assertArraysEqual(result3, [3, 2, 1]);
