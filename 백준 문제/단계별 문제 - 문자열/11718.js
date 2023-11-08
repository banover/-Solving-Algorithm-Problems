/*
문제: 입력받은 값을 그대로 출력하기
input : 알파벳 대/소, 공백, 숫자로 이루어진 string
output : input 그대로 출력
labeling : 함수 - printInputValue, input - inputStringAarray, output - result;
*/
const inputStringAarray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputStringAarray.map((string) => console.log(string));
