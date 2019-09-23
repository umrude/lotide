const assertArraysEqual = require('../assertArraysEqual');
const middle = require("../middle");


assertArraysEqual(middle([1, 2, 5, 4, 5]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), [1]);