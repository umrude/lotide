let eqArraysEqual = function (arr1, arr2) {
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
}

let eqArrays = function (arr1, arr2) {
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

let without = function(source, remove) {
  let newArr = source.filter(function (num) {
    return !remove.includes(num);
  });
  return newArr;
};
//declare a new empty array
  // new array = source
  // source gets filtered with the input from "remove" until .includes() = false;
console.log(without([1, 2, 3], [1]));



