const middle = function(arr) { //Nameless function assigned to the variable middle
  
  /*
  Parameters:
  arr - Array of elements

  Returns
  Middle index, if there is an even list, it will return both the middle arrays
  */

  let result = []; //Empty array

  if (arr.length < 3) { //Check to see if array empty, one element or two elements

    return result; //Returns empty array

  } else if (arr.length % 2 === 1) {//Check to see if array is odd

    let midIndex = (arr.length - 1) / 2;
    result = [arr[midIndex]]; //Returns middle index
    return result;

  } else { //All other cases are even

    let lowMiddle = Math.floor((arr.length - 1) / 2);
    let highMiddle = Math.ceil((arr.length - 1) / 2);
    
    result = [arr[lowMiddle], arr[highMiddle]];

    return result;

  }

};

module.exports = middle;
