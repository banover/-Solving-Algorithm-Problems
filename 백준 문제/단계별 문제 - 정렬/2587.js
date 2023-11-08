/*
문제: 다섯개의 자연수가 주어질 때, 이 값들의 평균값과 중앙값을 구하기
input : 자연수 다섯 개
output : 평균값, 중앙값
labeling : 함수 - getAverageAndCenterValue, input - numberArray, output - average, center
*/
const numberArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => Number(number));

numberArray.sort((a, b) => a - b);
const totalSum = numberArray.reduce((sum, number) => (sum += number), 0);
const average = totalSum / numberArray.length;
const centerValue = numberArray[Math.floor(numberArray.length / 2)];
console.log(average);
console.log(centerValue);
