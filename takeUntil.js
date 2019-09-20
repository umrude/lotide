const takeUntil = function(array, callback) {
  let result = [];
  for (let x in array) {
    let callbackRes = (callback(array[x]));
    if (!callbackRes) {
      result.push(array[x]);
    } else if (callbackRes) {
      break;
    }
  } return result;
};

//function will return a "slice of the array with elements taken from the beginning"
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(results1);