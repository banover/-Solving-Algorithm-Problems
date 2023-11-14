const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tempArray = input.map(
  (trial) =>
    trial
      .split(" ")
      .map((number) => +number)
      .filter((number) => number === 0).length
);

const result = tempArray.map((number) => {
  if (number === 0) {
    return "E";
  }
  if (number === 1) {
    return "A";
  }
  if (number === 2) {
    return "B";
  }
  if (number === 3) {
    return "C";
  }
  if (number === 4) {
    return "D";
  }
});

console.log(result.join("\n"));
