/*
문제: 나란히 놓여있는 번호가 붙은 바구니 N개가 있을 때, M번을 범위를 정해서 바구니의 순서를 역순으로 바꾼다. M번 순서를 바꾼 후 나란히 놓여있는 맨 왼쪽 바구니부터의 바구니 번호를 출력한다
input : 바구니 갯수(number), 순서바꿀 횟수(number), 순서바꿀 바구니 범위(number)
output : 바구니의 번호 나열(string)
labeling : 함수 - printChangedBasketNumber, input - basketNumbers, numberOfChange, startRange, endRange, output - result
*/
// const input = ["5 4", "1 2", "3 4", "1 4", "2 2"];

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[basketNumbers, numberOfChange] = input[0]
  .split(" ")
  .map((number) => Number(number));

let result = Array.from(Array(basketNumbers).keys(), (number) => number + 1);

for (let i = 1; i <= numberOfChange; i++) {
  [startRange, endRange] = input[i].split(" ").map((number) => Number(number));
  let reversedSubArray = result.slice(startRange - 1, endRange).reverse();

  result.splice(startRange - 1, endRange - startRange + 1, ...reversedSubArray);
}
console.log(result.join(" "));
