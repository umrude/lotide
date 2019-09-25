const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("should return {Gabi: 2} when given ['Gabi', 'Geollegue','Gabi'] as input and {'Gabi': true} as items to count(callback)'", () => {
    let input = [
      "Gabi",
      "Geollegue",
      "Gabi"
    ];
    let callback = {"Gabi": true};
    assert.deepEqual(countOnly(input, callback), {"Gabi": 2});
  });

  it("should return {} when given ['Gabi', 'Geollegue'] as input and '{'Frank': true} as items to count (callback)'", () => {
    let input = ["Gabi", "Geollegue"];
    let callback = {"Frank": true};

    assert.deepEqual(countOnly(input,callback), {});
  });
});