/*
문제 : n개의 정수가 주어졌을 때, 최소값과 최대값 구하기
input: 정수의 개수, 정수나열String
output: '최솟값 최댓값' string  
label : 함수 - getMinAndMaxNumber, input - theNnumberOfNumbers, numberData, output - result
*/

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [theNnumberOfNumbers, numberData] = input;
const numberDataArray = numberData.split(" ");

const sortNumberDataArray = numberDataArray.sort((a, b) => a - b);

const minNumber = sortNumberDataArray[0];
const maxNumber = sortNumberDataArray[sortNumberDataArray.length - 1];
console.log(`${minNumber} ${maxNumber}`);
