const flatten = function(arr) { //Nameless function assigned to the variable flatten

  let newArr = [];//

  for (let i = 0; i < arr.length; i++) { //Iterates over length of arr

    if (Array.isArray(arr[i])) { //Checks to see if element is array or not

      for (let j = 0; j < arr[i].length; j++) { //Iterates over length of arr[i]

        newArr.push(arr[i][j]); //Adds new item to end

      }

    } else {

      newArr.push(arr[i]); //Adds item to end of lush

    }
  
  }
    
  return newArr;

};

module.exports = flatten;