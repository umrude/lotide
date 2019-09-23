const head = function(arr) {
  if (arr === undefined) {
    return undefined;
  } else if (arr.length > 0) {
    return arr[0];
  } else {
    return arr;
  }
};
module.exports = head;