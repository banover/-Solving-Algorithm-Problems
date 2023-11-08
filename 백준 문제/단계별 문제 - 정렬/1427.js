/*
문제: 한 개의 숫자열이 주어질 때, 숫자열의 각 개별 수의 자리수를 내림차순을 정렬해서 숫자열로 출력하기
input : 숫자열
output : 내림차순 정렬된 숫자열
labeling : 함수 - getDesendingNumbers, input - inputNumbers, output - result
*/
// const inputNumbers = "2143";
const inputNumbers = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const inputNumbersArray = inputNumbers
  .split("")
  .map((number) => Number(number));

inputNumbersArray.sort((a, b) => b - a);
console.log(inputNumbersArray.join(""));
