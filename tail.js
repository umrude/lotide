const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = function(arr) {
  let newArr = [];
  if (arr === undefined) {
    return arr;
  } else if (arr.length > 1) {
    for (let i = 1; i <= arr.length - 1; i++) {
      newArr.push(arr[i]);
    } return newArr;
  } else {
    return [];
  }
};

console.log(tail(["Hello", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!