const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("should return true when inputted with {a: '1', b: '2'} and {b: '2', a: '1'}", () => {
    let ab = {
      a: "1",
      b: "2"
    };
    let ba = {
      b: "2",
      a: "1"
    };
    assert.equal(eqObjects(ab, ba), true);
  });
  it("should return false when inputted a:'1', b:'2', c:'3' and {a: '1', b: '2'} ", () => {
    let abc = {
      a: "1",
      b: "2",
      c: "3"
    };
    let ab = {
      a: "1",
      b: "2"
    };

    assert.equal(eqObjects(abc, ab), false);
  });
});
