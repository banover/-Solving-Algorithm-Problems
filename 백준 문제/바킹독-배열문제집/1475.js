const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const numbersIncludedInSets = "0123456789";
const usedNumberCount = new Array(10).fill(0);

input.forEach((number) => {
  usedNumberCount[numbersIncludedInSets.indexOf(number)]++;
});

let maxCountValue = 0;

for (let i = 0; i < usedNumberCount.length; i++) {
  if (i === 6 || i === 9) {
    continue;
  }
  maxCountValue = Math.max(maxCountValue, usedNumberCount[i]);
}

maxCountValue = Math.max(
  maxCountValue,
  Math.ceil((usedNumberCount[6] + usedNumberCount[9]) / 2)
);

console.log(maxCountValue);
// const input = ["1", "2", "6", "3", "5"];
