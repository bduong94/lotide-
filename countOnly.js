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

module.exports = countOnly;