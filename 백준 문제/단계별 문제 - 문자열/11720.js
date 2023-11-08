/*
문제: n개의 나열된 숫자를 모두 합하기
input : 숫자의 갯수, 갯수에 맞는 나열된 숫자
output : 숫자 배열의 모든 아이템의 합
labeling : 함수 - getTotalSum, input - numberOfNumber, inputNumberArray, output - result;
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const inputNumberArray = input[1].split("").map((number) => Number(number));
const result = inputNumberArray.reduce((sum, number) => (sum += number), 0);
console.log(result);
