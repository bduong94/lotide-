const letterPositions = function(sentence) {

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

module.exports = letterPositions;