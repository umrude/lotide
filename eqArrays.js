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

module.exports =  eqArrays;