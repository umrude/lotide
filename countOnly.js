let countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {// for the items in the list of all items ("item" in the for..of loop iterates through each of the items on the inputted list)
    if (itemsToCount[item]) { //if the item to count (ex. "jason":true) == to the current iteration of item then
      if (results[item]) { // if the item already is on the list vvvv (basically comparing the current iteration of the list to the current item)
        results[item] += 1; //count increases
      } else { //else if the item isnt already on the list during this iteration
        results[item] = 1; //count remains the same
      }
    }
  }
  return results;
};
module.exports = countOnly;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
//The function should report back how many instances of each string were found in the allItems array of strings.
//Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.

//only keys which have a truthy value should be counted in the resulting object
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);