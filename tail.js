const tail = function(words) { //Nameless function assigned to the variable tail

  if (words === [] || words.length === 1) { //Checks to see if words is an empty string or has only one element in the array
  
    return [];

  }

  return words.slice(1); //Slices from index 1 to the end

};

module.exports = tail;