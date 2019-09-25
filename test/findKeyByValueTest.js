const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("should return 'drama' when given const bestTvShowsByGenre = {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine, drama: 'The Wire'} and 'the Wire'", () => {
    let input = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.equal(findKeyByValue(input, "The Wire"), "drama");
  });

  it("should return undefined when a value doesnt exist", () => {
    let input = "That 70's Show";
    assert.equal(findKeyByValue(input), undefined);
  });
});