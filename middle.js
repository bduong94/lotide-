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

const middle = function(arr) { //Nameless function assigned to the variable middle
  
  /*
  Parameters:
  arr - Array of elements

  Returns
  Middle index, if there is an even list, it will return both the middle arrays
  */

  let result = []; //Empty array

  if (arr.length < 3) { //Check to see if array empty, one element or two elements

    return result; //Returns empty array

  } else if (arr.length % 2 === 1) {//Check to see if array is odd

    let midIndex = (arr.length - 1) / 2;
    result = [arr[midIndex]]; //Returns middle index
    return result;

  } else { //All other cases are even

    let lowMiddle = Math.floor((arr.length - 1) / 2);
    let highMiddle = Math.ceil((arr.length - 1) / 2);
    
    result = [arr[lowMiddle], arr[highMiddle]];

    return result;

  }

};

//Test Cases
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2,3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
