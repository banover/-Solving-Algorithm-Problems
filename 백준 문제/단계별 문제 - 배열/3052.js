/*
문제: 자연수 10개를 42로 나눈 나머지를 구한 후, 10개의 나머지들 중 다른 값이 몇 개인지 구하기
input : 1000 이하의 자연수 10개
output : 나머지들 중 다른 값의 갯수
labeling : 함수 - getTheNumberOfDifferentValueOfRemains, input - numbersArray, output - result;
*/
const numbersArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => Number(number));

// let result = 0;
const duplicateValue = [];
const remainsArray = numbersArray.map((number) => number % 42);
const result = remainsArray.filter((number) => {
  if (duplicateValue.includes(number)) {
    return false;
  } else {
    duplicateValue.push(number);
    return true;
  }
});
console.log(result.length);
