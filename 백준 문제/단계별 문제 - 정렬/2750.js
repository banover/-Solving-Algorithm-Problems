/*
문제: n개의 수가 있을 때, 오름차순으로 정렬하는 프로그램 작성
input : 수의 개수(number), n개의 수(number)
output : 정렬된 수 나열
labeling : 함수 - makeSorted, input - numberArray, output - result
*/
// const numberArray = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((number) => Number(number));

// const numberArray = [5, 5, 2, 3, 4, 1];
// numberArray.shift();
// const result = numberArray.toSorted((a, b) => a - b);
// result.map((number) => console.log(number));

const numberArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => Number(number));

numberArray.shift();
numberArray.sort((a, b) => a - b);
numberArray.map((number) => console.log(number));
