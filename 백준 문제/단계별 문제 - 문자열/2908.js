/*
문제: 두 수가 주어질 때, 각 수를 역순의 새로운 수로 만들어서 비교한 후 더 큰 새로운 값을 출력하기
input : 비교할 세자리 수의 두 수(number)
output : 더 큰 값 1개(number)
labeling : 함수 - getSangsooAnswer, input - twoNumberArray, output - result;
*/
// const twoNumberArray = ["734", "893"];
const twoNumberArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ");

const reverseTwoNumberArray = twoNumberArray.map((number) => {
  const reverseNumber = Number(number.split("").reverse().join(""));

  return reverseNumber;
});

const result = Math.max(...reverseTwoNumberArray);
console.log(result);
