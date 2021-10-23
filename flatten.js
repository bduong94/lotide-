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

const flatten = function(arr) { //Nameless function assigned to the variable flatten

  let newArr = [];//

  for (let i = 0; i < arr.length; i++) { //Iterates over length of arr

    if (Array.isArray(arr[i])) { //Checks to see if element is array or not

      for (let j = 0; j < arr[i].length; j++) { //Iterates over length of arr[i]

        newArr.push(arr[i][j]); //Adds new item to end

      }

    } else {

      newArr.push(arr[i]); //Adds item to end of lush

    }
  
  }
    
  return newArr;

};


//Test Case
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]