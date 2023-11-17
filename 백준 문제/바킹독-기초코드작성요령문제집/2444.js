const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const numberOfPrintedStarsLines = 2 * input - 1;

let answer = "";
for (let i = 0; i < numberOfPrintedStarsLines; i++) {
  let line = "";
  if (i < Math.ceil(numberOfPrintedStarsLines / 2)) {
    for (let j = 1; j < input - i; j++) {
      line += " ";
    }
    //  4 3 2 1
    for (let j = 0; j < 2 * (i + 1) - 1; j++) {
      line += "*";
    }
  }
  if (i >= Math.ceil(numberOfPrintedStarsLines / 2)) {
    for (let j = 0; j <= i - Math.ceil(numberOfPrintedStarsLines / 2); j++) {
      line += " ";
    }
    for (
      let j = 0;
      j <
      numberOfPrintedStarsLines -
        2 * (i - Math.ceil(numberOfPrintedStarsLines / 2) + 1);
      j++
    ) {
      line += "*";
    }
  }

  answer += line + "\n";
}

console.log(answer);
