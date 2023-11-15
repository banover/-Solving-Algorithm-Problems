const tallSizes = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => +number);

const totalTallSize = tallSizes.reduce(
  (sum, currentSize) => sum + currentSize,
  0
);

const sumOfNoneDwarfTallSize = totalTallSize - 100;
let result;
for (let i = 0; i < tallSizes.length; i++) {
  for (let j = i + 1; j < tallSizes.length; j++) {
    if (tallSizes[i] + tallSizes[j] === sumOfNoneDwarfTallSize) {
      result = tallSizes.filter(
        (size) => size !== tallSizes[i] && size !== tallSizes[j]
      );

      break;
    }
  }
  if (tallSizes.length === 7) {
    break;
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));

// const tallSizes = [20, 7, 23, 19, 10, 15, 25, 8, 13]
//   .map((number) => +number)
//   .sort((a, b) => a - b);
