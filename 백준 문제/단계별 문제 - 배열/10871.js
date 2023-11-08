// 문제 : 하나의 수열(X)과 하나의 정수(A)를 주고, 수열에 정수보다 작은 수를 모두 출력하라
// input : 수열 1개, 정수 1개
// output : input 정수보다 작은 수열안의 숫자 출력
// label : 함수 - printNumberOfLessThenInputNumber, input - theNumberOfNumberData, inputNumber, NumberData, output: result

// function printNumberOfLessThenInputNumber(
//   theNumberOfNumberData,
//   inputNumber,
//   NumberData
// ) {
//   // let result;
//   const NumberDataArray = NumberData.split(" ");
//   // NumberDataArray.map((number) => number < inputNumber ? result.push(number) : number);
//   // result = NumberDataArray.filter((number) => number < inputNumber);
//   // return result;
//   return NumberDataArray.filter((number) => number < inputNumber);
// }

// nodejs version
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = "";

const [dataAboutNumber, numberData] = input;
const inputNumber = dataAboutNumber.split(" ")[1];
const NumberDataArray = numberData.split(" ");
const answerArray = NumberDataArray.filter(
  (number) => Number(number) < Number(inputNumber)
);
answerArray.map((number) => (result += number + " "));
console.log(result);
