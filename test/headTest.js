const assertEqual = require ('../assertEqual.js');
const head = require ('../head.js');

// TEST CODE
assertEqual(head([8]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
