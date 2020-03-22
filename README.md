# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.
Also contributed by Jas@Jsabharwal for pair programming

## Usage

**Install it:**

`npm install @zeipar/lotide`

**Require it:**

`const _ = require('@zeipar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Takes two arrays as parameters, and print whether they are equal or not.

* `assertEqual`: Takes two parameters, and print whether they are equal or not.

  (WARNING: This only compares two primitive types)
* `assertObjectsEqual`: Takes two objects as parameters, and print whether they are equal or not.

* `countLetters`: Takes a string and count the number of letters.

* `CountOnly`: Takes an object and a string and count the occurrence of the string within the object.

* `eqArrays` : Takes two arrays and print whether they are equal or not.

* `eqObjects` : Takes two objects and print whether they are equal or not.
Now support nested objects with arrays within.

* `findKey` : Takes an object { a: { b: c}} and a string. Search for key 'a' and return 'c' value, which is the value of the value of the key 'a'.

* `findKeyByValue` : Takes an object and a string, and return the key name for the given value(string).

* `flatten` : Takes an array and prints only the elements within nested structure.

* `head` : Takes an array and return the first element.

* `tail` : Takes an array and return all elements other than the 'head', the first element.

* `letterPositions` : Takes in an array and returns letters and their indice in an object.

* `map` : Takes an array and a callback function and return a new mapped array based on the callback function

* `middle` : Takes an array and return the elements in the middle. If the length of the array is even, return two elements in the middle.

* `takeUntil` : Takes an array and a callback function. Return a "slice of the array with elements taken from the beginning" with the given function.
