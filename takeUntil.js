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

const takeUntil = function(array, callback) { //Nameless function assigned to the variable takeUntil

  /*
  array - array of elements to be iterated
  callback - nameless function

  Returns
  Slice of array until the callback function returns a truthy value
  */

  let result = []; //Empty array

  for (let element of array) { //Iterates over each element of the array

    result.push(element); //Adds element to results array

    if (callback(element)) { //Checks to see if truthy value

      return result; //Ends function since truthy value found

    }

  }

  return result; //No truthy value

};

//Test Cases

let listOfNums1 = [5, 6, 7, 8, 9, 10];
let result1 = takeUntil(listOfNums1, num => num > 8);
assertArraysEqual(result1, [5, 6, 7, 8, 9]);

let listOfNums2 = [5, 6, 7, 8, 9, 10];
let result2 = takeUntil(listOfNums2, num => num > 15);
assertArraysEqual(result2, [5, 6, 7, 8, 9, 10]);