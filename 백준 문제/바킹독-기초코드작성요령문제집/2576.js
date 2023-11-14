const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => +number);

const oddNumberArray = input.filter((number) => number % 2 === 1);
if (oddNumberArray.length === 0) {
  console.log(-1);
}

if (oddNumberArray.length > 0) {
  const sumTotalOddNumber = oddNumberArray.reduce(
    (sum, number) => sum + number,
    0
  );

  const minOddNumber = Math.min(...oddNumberArray);
  console.log([sumTotalOddNumber, minOddNumber].join("\n"));
}
