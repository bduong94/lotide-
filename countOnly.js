const assertEqual = function(actual, expected) { //Nameless function assigned to the variable assertEqual

  if (actual === expected) { //Compares variables actual and expected to see if they are equal

    // return console.log('✅✅✅ Assertion Passed: "' + actual + '" === "' + expected + '"'); //Prints out pass message without Template Literals

    return console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`); //Prints out pass message with Template Literals

  }

  // return console.log('🛑🛑🛑 Assertion Failed: "' + actual + '" !== "' + expected + '"'); //Prints out fail message without Template Literals

  return console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`); //Prints out fail message with Template Literals

};

const countOnly = function(allItems, itemsToCount) { //Nameless function assigned to the variable countOnly

  /*
  Parameters
  allItems - an array of strings
  itemsToCount - an object with keys that have boolean values

  Return
  Object with the number of times the keys with true values is in allItems as their value in an object
  */

  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {

        results[item] += 1;
  
      } else {
  
        results[item] = 1;
  
      }
    }
  }

  return results;

};

//Test Case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);