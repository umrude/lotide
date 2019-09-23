const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 5 for [5, 6, 9]", () => {
    assert.strictEqual(head([5, 6, 9]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns one element if only one element inputted", () => {
    assert.strictEqual(head([5]),5);
  });

  it("returns undefined if array is empty", () => {
    assert.strictEqual(head(), undefined);
  });
});