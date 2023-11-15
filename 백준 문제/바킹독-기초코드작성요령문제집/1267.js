const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const numberOfCall = Number(input[0]);
const callTimeArray = input[1].split(" ").map((number) => +number);

const Yfee = callTimeArray.reduce((sum, curCallTime) => {
  return sum + (Math.floor(curCallTime / 30) + 1) * 10;
}, 0);

const Mfee = callTimeArray.reduce((sum, curCallTime) => {
  return sum + (Math.floor(curCallTime / 60) + 1) * 15;
}, 0);

if (Yfee > Mfee) {
  console.log(`M ${Mfee}`);
}

if (Yfee < Mfee) {
  console.log(`Y ${Yfee}`);
}

if (Yfee === Mfee) {
  console.log(`Y M ${Mfee}`);
}
