const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head(5, 6, 9), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");