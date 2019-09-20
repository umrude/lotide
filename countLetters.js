const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(strIn) {
  const results = {};
  strIn = strIn.replace(/\s/g, '');
  for (const x of strIn) {
    if (results[x]) {
      results[x] += 1;
    } else {
      results[x] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));


