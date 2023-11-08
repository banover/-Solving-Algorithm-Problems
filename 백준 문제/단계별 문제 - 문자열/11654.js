/*
문제: 알파벳 소-대문자, 숫자 0-9 중 하나가 주어질 때, 주어진 값의 아스키 코드값을 출력하기
input : 알파벳 소-대문자, 숫자 0-9 중 하나(string)
output : 아스키 코드 값(number)
labeling : 함수 - getAsciivalue, input - inputValue, output - result;
*/
const inputValue = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const result = inputValue.charCodeAt(0);
console.log(result);
