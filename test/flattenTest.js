const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] when [1, 2, [3, 4], 5, [6]] is entered", () => {
    let input = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(input),[1, 2, 3, 4, 5, 6]);
  });
});
// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]