/*
문제: 단어 1개와 정수i가 주어질 때, 단어의 i번째 글자를 출력하기
input : 단어(string), 글자자릿수(number)
output : 한글자(string)
labeling : 함수 - getCharacterOfcertainDigit, input - word, placeOfCharacter, output - result
*/
// const input = ["Sprout", "3"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const word = input[0];
const placeOfCharacter = Number(input[1]);
const result = word[placeOfCharacter - 1];
console.log(result);
