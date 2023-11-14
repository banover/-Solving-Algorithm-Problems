const toBeSortedArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((number) => +number);

toBeSortedArray.sort((a, b) => a - b);
console.log(toBeSortedArray.join(" "));
