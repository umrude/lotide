let eqArraysEqual = function(arr1, arr2) {
  let result = "";
  for (let x = 0; x <= arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      result = "Assesment Failed: Arrays are not equal!";
      break;
    } else if (arr1[x] === arr2[x]) {
      result = "Assesment Passed: Arrays are equal!";
    }
  }
  console.log(result);
  return result;
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

let middle = function(arr) {
  let result = [];
  let middleOdd = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    result = [];
  } else if (arr.length % 2 === 0) {
    result = arr.splice(middleOdd - 1, 2);
  } else if (arr.length % 2 !== 0) {
    result = arr.splice(middleOdd,1);
  }
  return result;
};

console.log(middle([1, 2, 5, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1])); // => []
console.log(middle([1, 2]));