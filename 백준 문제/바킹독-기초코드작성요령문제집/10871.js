/*
문제: 정수 N개로 이뤄진 수열 A와 정수 X가 있을 때, A에서 X보다 작은 수 모두 출력하는 프로그램 작성  
input : numberArray, targetInteger
output : 수 나열
labeling : 함수 - printNumbers, input - numberArray, targetInteger, output - result
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const targetInteger = Number(input[0].split(" ")[1]);
const numberArray = input[1].split(" ").map((number) => +number);

const answerArray = numberArray.filter((number) => number < targetInteger);
console.log(answerArray.join(" "));
