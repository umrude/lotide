
let tail = function(arr) {
  let newArr = [];
  if (arr.length > 1) {
    for (let i = 1; i <= arr.length - 1; i++) {
      newArr.push(arr[i]);
    } return newArr;
  } else {
    return undefined;
  }
};
module.exports = tail;

