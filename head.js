const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr === undefined) {
    return undefined;
  } else if (arr.length > 0) {
    return arr[0];
  } else {
    return arr;
  }
};

assertEqual(head(5, 6, 9), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");