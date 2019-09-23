

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

module.exports = middle;