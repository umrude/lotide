const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😤Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = (sentence[i]);
    if (results[letter]) {
      results[sentence[i]].push(i);
    } else {
      results[letter] = [i];
    }
  }
  delete results[" "];
  return results;
};

console.log(letterPositions("lighthouse in the house"));


