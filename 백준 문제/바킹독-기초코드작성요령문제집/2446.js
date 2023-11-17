const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const lineSpace = 2 * input - 1;
let answer = "";
let line = "";

for (let i = 0; i < input - 1; i++) {
  for (let j = 0; j < i; j++) {
    line += " ";
  }
  for (let j = 0; j < lineSpace - 2 * i; j++) {
    line += "*";
  }

  line += "\n";
}

for (let i = 0; i < input - 1; i++) {
  line += " ";
}
line += "*" + "\n";

for (let i = input - 1; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    line += " ";
  }
  for (let j = 0; j < lineSpace - 2 * (i - 1); j++) {
    line += "*";
  }

  line += "\n";
}

console.log(line);
