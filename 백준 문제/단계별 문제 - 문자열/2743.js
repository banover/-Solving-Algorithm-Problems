/*
문제: 알파벳으로 구성된 단어 한개를 받아, 해당 단어의 길이를 출력하기
input : 소문자와 대문자로 구성된 단어1개(string)
output : 단어의 길이(number or string)
labeling : 함수 - getLenthOfWord, input - word, output - result
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const word = input[0];
const result = word.length;
console.log(result);
