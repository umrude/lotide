const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("should return [5] for [1, 2, 5, 4, 5]", () => {
    let input = [1, 2, 5, 4, 5];
    assert.deepEqual(middle(input), [5]);
  });

  it("should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    let input = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(middle(input), [3, 4]);
  });

  it("should return [] from [1]", () => {
    let input = [1];
    assert.deepEqual(middle(input), []);
  });
  
  it("should return [] from [1, 2]", () => {
    let input = [1, 2];
    assert.deepEqual(middle(input), []);
  });
});