const numberOfStars = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

const totalSpace = 2 * numberOfStars - 1;
let answer = "";
for (let i = 1; i <= numberOfStars; i++) {
  const numberOfBlankSpace = totalSpace - (2 * i - 1);
  const numberOfPrintedStars = totalSpace - numberOfBlankSpace;
  let starString = "";

  for (let j = 0; j < totalSpace; j++) {
    if (j < numberOfBlankSpace / 2) {
      starString += " ";
      continue;
    }
    if (j >= numberOfBlankSpace / 2 + numberOfPrintedStars) {
      continue;
    }
    starString += "*";
  }
  answer += starString + "\n";
}

console.log(answer);
