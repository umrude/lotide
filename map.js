/* eslint-disable no-unused-vars */
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ab", "cd", "ef", "gh", "ij"];
const words3 = ["hello", "goodbye", "array", "foo", "bar"];
