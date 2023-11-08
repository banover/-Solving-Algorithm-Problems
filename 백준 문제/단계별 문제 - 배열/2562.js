/* 
문제: 9개의 자연수가 주어질 때, 최댓값을 찾고 몇번째 자리에 최댓값이 있는지 구하기
input: 9개의 수 number
output: number 두개, (최댓값, 자릿수)
laveling: 함수 - getMaxValueAndNumberOfPlace, input - inputArray, output - maxValue, placeNumber

*/
function getMaxValueAndNumberOfPlace() {
  const inputArray = ["3", "29", "38", "12", "57", "74", "40", "85", "61"];
  let maxValue = 0;
  let placeNumber;

  const inputNumberArray = inputArray.map((number) => parseInt(number));
  inputNumberArray.map((number, index) => {
    if (number > maxValue) {
      maxValue = number;
      placeNumber = index + 1;
    }
  });
  console.log(maxValue);
  console.log(placeNumber);
}

// node version
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const inputNumberArray = input.map((number) => Number(number));
let maxValue = 0;
let placeNumber = 0;
inputNumberArray.map((number, index) => {
  if (number > maxValue) {
    maxValue = number;
    placeNumber = index + 1;
  }
});
console.log(maxValue);
console.log(placeNumber);
