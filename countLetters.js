const assertEqual = function(actual, expected) { //Nameless function assigned to the variable assertEqual

  if (actual === expected) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); //Prints out fail message with Template Literals

};

const countLetters = function(stringToCount) { //Nameless function assigned to the function countLetters

  /*
  Parameters:
  stringToCount - An string to be counted

  Returns
  An object with a count of unique characters in the string "stringToCount"
  */

  let stringToCountArray = stringToCount.split(""); //Splits string into array of each character
  let numberOfLetters = {}; //Empty object

  for (let char of stringToCountArray) { //Iterates through each string

    //Check to see if each letter is printing
    // console.log(char);

    if (char !== " ") { //Removes white space
      if (numberOfLetters[char]) { //If keys exists, add 1 to value

        numberOfLetters[char] += 1;
  
      } else { //Adds new key
  
        numberOfLetters[char] = 1;
  
      }
    }

  }


  console.log(numberOfLetters);

  return numberOfLetters;

};

//Test Case:
const uniqueLetterCount = countLetters("lighthouse in the house");

assertEqual(uniqueLetterCount["l"], 1);
assertEqual(uniqueLetterCount["i"], 2);
assertEqual(uniqueLetterCount["g"], 1);
assertEqual(uniqueLetterCount["h"], 4);
assertEqual(uniqueLetterCount[" "], undefined);
