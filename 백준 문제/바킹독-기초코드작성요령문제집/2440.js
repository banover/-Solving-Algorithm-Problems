const numberOfStars = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";
for (let i = 0; i < numberOfStars; i++) {
  let result = "";
  for (let j = numberOfStars - i; j > 0; j--) {
    result += "*";
  }

  answer += result + "\n";
}
console.log(answer);
