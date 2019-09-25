const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("Should return '{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }' when given 'hello'", () => {
    let input = "hello";
    assert.deepEqual(letterPositions(input),
      { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});