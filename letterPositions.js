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

module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));
