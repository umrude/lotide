/* eslint-disable space-before-function-paren */
let assertArraysEqual = function (arr1, arr2) {
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

module.exports = assertArraysEqual;
