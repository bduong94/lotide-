const assertEqual = function(actual, expected) { //Nameless function assigned to the variable assertEqual

  if (actual === expected) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); //Prints out fail message with Template Literals

};

const head = function(data) { //Nameless function assigned to the variable head

  if (data === []) {

    return undefined; //If empty array, returns undefined

  }

  return data[0]; //Returns first element of the array

}

//Test Cases
assertEqual(head([5,6,7]), 5); //Test Case with integers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Test Case with strings
console.log(head([])); //Test case with empty string
console.log(head([1])); //Test case with 1 element only