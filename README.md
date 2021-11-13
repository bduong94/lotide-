# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bduong94/lotide`

Link can also be found at: https://www.npmjs.com/package/@bduong94/lotide

**Require it:**

`const _ = require('@bduong94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts if two arrays are equal
* `assertEqual`: Asserts if two elements are equal
* `assertObjectsEqual`: Asserts if two objects are equal
* `countLetters`: Counts the number of times a character appears in a string
* `countOnly`: Counts the number of times an element appears in an array from using elements from another array
* `eqArrays`: Checks if two arrays are equal
* `eqObjects`: Checks if two objects are equal
* `findKey`: Function that returns a key based on a callback function
* `findKeyByValue`: Function that returns a key if the value is found for that key within the object
* `flatten`: Function that splits arrays into individual elements
* `head`: Function returns the first element of an array
* `letterPositions`: Function that returns indices of a string
* `middle`: Function that returns the middle element of an array
* `tail`: Function that returns everything except the first element of an array