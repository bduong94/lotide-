const assertEqual = function(actual, expected) { //Nameless function assigned to the variable assertEqual

  if (actual === expected) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); //Prints out fail message with Template Literals

};

//Test Code
assertEqual("Coders", "Coders"); //Identical Strings
assertEqual("Lighthouse Labs", "Bootcamp"); //Non-identical strings
assertEqual(1, 1); //Identical numbers
assertEqual(5, 4); //Non-identical numbers