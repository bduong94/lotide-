const head = require('../head');
const assertEqual = require('../assertEqual');

//Test Cases
assertEqual(head([5,6,7]), 5); //Test Case with integers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Test Case with strings
console.log(head([])); //Test case with empty string
console.log(head([1])); //Test case with 1 element only