/* eslint-disable camelcase */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(input, value) {
  let keys = Object.keys(input);
  let val = "";
  for (let key of keys) {
    if (input[key] === value) {
      val = key;
      break;
    } else {
      val = undefined;
    }
  } return val;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
