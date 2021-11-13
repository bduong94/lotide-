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

  return numberOfLetters;

};

module.exports = countLetters;