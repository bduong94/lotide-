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

const letterPositions = function (sentence) {

  /*
  Parameters
  Sentence - string to analyze

  Return
  All the indices a character appears in a sentence
  */
 
  let indexOfLetters = {}; //Empty array
  let sentenceArray = sentence.split(""); //Splits sentence into array to iterate
  let i = 0; //Counter

  for (let char of sentenceArray) { //Iterates over array of sentence

    if (char !== " ") { //Skips any white spaces

      // console.log(char);
      
      if (indexOfLetters[char]) { //Checks to see if character is in object
        
        indexOfLetters[char].push(i); //Adds index to array

      } else {

        indexOfLetters[char] = [i]; //Creates new array for the value

      }
    }

    i++; //Increments counter each time
  }
  
  return indexOfLetters;
};

//Test Case

let test = letterPositions("hello");

assertArraysEqual(test["h"], [0]);
assertArraysEqual(test["e"], [1]);
assertArraysEqual(test["l"], [2, 3]);

let test2 = letterPositions("lighthouse in the house");

assertArraysEqual(test2["l"], [0]);
assertArraysEqual(test2["i"], [1, 11]);
assertArraysEqual(test2["h"], [3, 5, 15, 18]);
assertArraysEqual(test2["t"], [4, 14]);