const inputString = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const numberOfAlpabet = 26;
const stringArray = inputString.split("");
const numberOfCharacter = {};

stringArray.map((character) => {
  if (numberOfCharacter[character]) {
    numberOfCharacter[character] += 1;
  } else {
    numberOfCharacter[character] = 1;
  }
});

let answer = "";
for (let i = 97; i <= 97 + 25; i++) {
  if (numberOfCharacter[String.fromCharCode(i)]) {
    answer += `${numberOfCharacter[String.fromCharCode(i)]}` + " ";
  } else {
    answer += "0" + " ";
  }
}

console.log(answer);

// 참고 코드
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const counts = new Array(26).fill(0);

// input.forEach((i) => counts[alphabet.indexOf(i)]++);

// console.log(counts.join(" "));
