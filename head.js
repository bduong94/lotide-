const assertEqual = require('./assertEqual');

const head = function(data) { //Nameless function assigned to the variable head

  if (data === []) {

    return undefined; //If empty array, returns undefined

  }

  return data[0]; //Returns first element of the array

};

module.exports = head;