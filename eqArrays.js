const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(arr1, arr2) {
  let result;
  for (let x = 0; x <= arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      result = false;
      break;
    } else if (arr1[x] === arr2[x]) {
      result = true;
    }
  }
  console.log(result);
  return result;
};
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);