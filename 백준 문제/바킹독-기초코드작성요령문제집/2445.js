const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

const lineSpace = input * 2; // 10
let answer = "";
let line = "";
for (let i = 0; i < input - 1; i++) {
  // 4
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  for (let j = 0; j < lineSpace - 2 * (i + 1); j++) {
    line += " ";
  }
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  line += "\n";
}

answer += line;
line = "";

for (let i = 0; i < lineSpace; i++) {
  line += "*";
}

answer += line + "\n";
line = "";

for (let i = 0; i < input - 1; i++) {
  for (let j = 0; j < input - i - 1; j++) {
    line += "*";
  }
  for (let j = 0; j < 2 * i + 2; j++) {
    line += " ";
  }
  for (let j = 0; j < input - i - 1; j++) {
    line += "*";
  }
  line += "\n";
}
answer += line;
line = "";

console.log(answer);
