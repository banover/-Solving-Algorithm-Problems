const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [first, second] = input[0]
  .split(" ")
  .map((number) => +number)
  .sort((a, b) => a - b);

const innerNumbers = [];
for (let i = first + 1; i < second; i++) {
  innerNumbers.push(i);
}

const result = `${innerNumbers.length}\n${innerNumbers.join(" ")}`;
console.log(result);

// 참고 코드
// const fs = require('fs');

// const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
// const [N, M] = input[0]
//         .split(' ')
//         .map(Number)
//         .sort((a, b) => a - b);

// const answer = [];
// let cnt = 0;
// for (let i = N + 1; i < M; i++) {
//         cnt += 1;
//         answer.push(i);
// }

// console.log(cnt);
// console.log(answer.join(' '));
