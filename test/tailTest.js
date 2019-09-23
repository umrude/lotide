const tail = require("../tail");
const assert = require('chai').assert;


describe("#tail", () => {
  it("should return [4, 5, 6] from [1, 2, 3, 4, 5, 6] ", () => {
    let input = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(tail(input), [2, 3, 4, 5, 6]);
  });
  it("The tail of ['hi'] is undefined", () => {
    let input = ["hi"];
    assert.deepEqual(tail(input), undefined);
  });
});
