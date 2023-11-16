const numberOfStars = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";
for (let i = 0; i < numberOfStars; i++) {
  let starString = "";

  for (let j = i; j > 0; j--) {
    starString += " ";
  }
  for (let k = 0; k < numberOfStars - i; k++) {
    starString += "*";
  }
  answer += starString + "\n";
}

console.log(answer);
