const assertEqual = function(actual, expected) { //Nameless function assigned to the variable assertEqual

  if (actual === expected) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); //Prints out fail message with Template Literals

};

const findKeyByValue = function(objectToTest, value) {

  /*
  Parameter
  objectToTest - an object with key-value pairs to test
  value - element used to find the key in objectToTest

  Returns
  The key in objectToTest if value is found, otherwise returns undefined
  */

  //Iterate over keys
  for (const key in objectToTest) {

    if (objectToTest[key] === value) { //Check if value for key is the same, return key

      return key;

    }
  }

  return undefined; //If key not found, return undefined

};

//Test Case
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const videoGames = {
  shooter: "Call of Duty",
  rpg: "Final Fantasy XIV",
  adventure: "Pokemon"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(videoGames, "Pokemon"), "adventure");
assertEqual(findKeyByValue(videoGames, "Dynasty Warriors"), undefined);