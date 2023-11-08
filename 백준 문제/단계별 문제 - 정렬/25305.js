/*
문제: N명의 학생 중 점수가 가장 높은 k명이 상을 받는다. 상을 받을 커트라인 점수를 구하라.
input : 응시자 수, 상을 받는 사람 수, 점수배열
output : 커트라인 점수
labeling : 함수 - getCutLineScore, input - numberOfStudent, numberOfAwardRecipient, scoreArray, output - result
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[numberOfStudent, numberOfAwardRecipient] = input[0]
  .split(" ")
  .map((number) => Number(number));

const scoreArray = input[1].split(" ").map((number) => Number(number));
scoreArray.sort((a, b) => a - b);
const result = scoreArray[scoreArray.length - 1 - (numberOfAwardRecipient - 1)];
console.log(result);
