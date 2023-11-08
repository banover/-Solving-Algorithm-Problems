/*
문제: n개의 수가 있을 때, 오름차순 정렬 프로그램 만들기 
input : 수의 개수, 수배열
output : 오름차수 수배열
labeling : 함수 - getAscendingNumbers, input - numberOFNumbers, numberArray, output - result
*/
// const numberArray = [5, 5, 4, 3, 2, 1];
const numberArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => Number(number));

numberArray.shift();
numberArray.sort((a, b) => a - b);
// numberArray.map((number) => console.log(number));
console.log(numberArray.join("\n"));
