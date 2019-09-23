let flatten = function(input) {
  let newArr = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === true) {
      for (let x = 0; x < input[i].length; x++) {
        newArr.push(input[i][x]);
      }
    } else if (Array.isArray(input[i]) === false) {
      newArr.push(input[i]);
    }
  }
  console.log(newArr);
  return newArr;
};

module.exports = flatten;

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
