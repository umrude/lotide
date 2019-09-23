# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @umrude/lotide`

**Require it:**

`const _ = require('@umrude/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(arr1, arr2)`: asserts if arrays are equal
* `assertEqual(actual, expected)`: asserts if two strings are equal
* `assertObjectsEqual(actual, expected)`: assertation for if objects are equal
* `countLetters(strIn)`: counts how many times a letter repeats in a string
* `countOnly(allItems, itemsToCount)`: will return an object containing counts of everything that the input object listed.
* `eqArrays(arr1, arr2)`: checks if two arrays are equal
* `eqObjects(obj1, obj2)`: checks if two objects are equal
* `findKey(input, callback)`: finds the key of a given object and given value by callback function
* `findKeyByValue(input, value)`: given a object list, it finds the associated key by looking up the value
* `flatten(arr)`: takes in an array of arrays and return a "flattened" version of the array
* `head(arr)`: returns first value of given array
* `letterPositions(sentence)`: returns the positions of the letters of a given string
* `map(array, callback)`: return a new array based on the results of the callback function
* `middle(arr)`: return an array with only the middle element(s) of the provided array
* `tail(arr)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(arr, callback)`: will keep collecting items from a provided array until the callback provided returns a truthy value
* `without(source, remove)`: returns a subset of a given array, removing unwanted elements without modifying the given array

