const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sizeOfSequence = Number(input[0]);
const sequence = input[1].split(" ").map(Number);
const predictedSumValue = Number(input[2]);
const maxValueInsequence = Math.max(...sequence);

const numberCount = new Array(maxValueInsequence + 1).fill(0);

sequence.forEach((number) => {
  numberCount[number]++;
});

let answer = 0;
for (let i = 0; i < sizeOfSequence; i++) {
  if (
    numberCount[predictedSumValue - sequence[i]] * predictedSumValue -
      sequence[i] ===
    sequence[i]
  ) {
    continue;
  }
  if (numberCount[predictedSumValue - sequence[i]] !== 0) {
    answer++;
  }
}

console.log(answer / 2);

// 참고 코드

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let n = Number(input[0]);
// let x = Number(input[2]);
// let arr1 = input[1].split(" ").map(Number);

// let bs = function (arr, target, start, end) {
//   let mid = 0;
//   while (start <= end) {
//     mid = Math.trunc((start + end) / 2);
//     if (target === arr[mid]) return 1;
//     if (arr[mid] < target) start = mid + 1;
//     else end = mid - 1;
//   }
//   return 0;
// };

// arr1.sort((a, b) => a - b);

// let count = 0;
// for (let i = 0; i < n; i++) {
//   count += bs(arr1, x - arr1[i], 0, n - 1);
// }

// console.log(Math.floor(count / 2));
