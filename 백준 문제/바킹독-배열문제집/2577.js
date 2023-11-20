const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const multiplicationValue = input
  .reduce((multipValue, number) => multipValue * number, 1)
  .toString();

const numbersCanBeIncluded = "0123456789";
const repeatedNumberCount = Array.from({ length: 10 }, () => 0);

for (let i = 0; i < multiplicationValue.length; i++) {
  if (numbersCanBeIncluded.includes(multiplicationValue[i])) {
    repeatedNumberCount[numbersCanBeIncluded.indexOf(multiplicationValue[i])]++;
  }
}

console.log(repeatedNumberCount.join("\n"));
