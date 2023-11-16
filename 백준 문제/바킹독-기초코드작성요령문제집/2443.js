const numberOfStars = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";

for (let i = 1; i <= numberOfStars; i++) {
  let starString = "";
  for (let j = 1; j < i; j++) {
    starString += " ";
  }
  for (let j = 1; j <= 2 * numberOfStars - (2 * i - 1); j++) {
    starString += "*";
  }
  answer += starString + "\n";
}
console.log(answer);
