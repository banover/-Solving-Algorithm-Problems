/*
문제: 문자열이 주어질 때, 문자열의 첫 글자와 마지막 글자 출력하기
input : 문자열 갯수(number), 문자열(string)
output : 첫글자와 마지막 글자(string)
labeling : 함수 - getOutlineCharacter, input - numberOfStrings, inputWordArray, output - result;
*/
// const input = ["3", "ACDKJFOWIEGHE", "O", "AB"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[numberOfStrings, ...inputWordArray] = input;

inputWordArray.map((word) => console.log(`${word[0] + word[word.length - 1]}`));
