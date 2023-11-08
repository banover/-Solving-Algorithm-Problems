/*
문제: 대소문자와 공백으로 이뤄진 문자열이 있을 때, 해당 문자열에 몇개의 단어가 있는지 출력하기
input : 문자열(string)
output : 문자열에 있는 단어의 개수(number)
labeling : 함수 - getTheNumberOfWordsInString, input - originalString, output - result;
*/

// const originalString = "  ";
const originalString = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const stringArray =
  originalString.trim() === "" ? null : originalString.trim().split(" ");

stringArray ? console.log(stringArray.length) : console.log(0);
