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
module.exports = countLetters;
console.log(countLetters("lighthouse in the house"));


