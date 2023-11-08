// 문제 : 정수의 개수와 해당 정수data가 주어졌을 때, 정수data 중 특정 정수가 몇 개가 있는지 구하는 함수를 만들어라.
// input: 3개의 input, 정수의 개수와 정수집합, 찾고싶은 정수
// output: 정수집합안에 있는 찾고 싶은 정수의 개수
// label : 함수이름 getTheNumberOfInputNumber, input(theNumberOfNumbers, numberData, inputNumber)

// js version
function getTheNumberOfInputNumber(
  theNumberOfNumbers,
  numberData,
  inputNumber
) {
  let result = 0;
  const numberDataArray = numberData.split(" ");
  numberDataArray.map((number) =>
    Number(number) === inputNumber ? result++ : number
  );
  return result;
}

// nodejs version
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [theNumberOfNumbers, numberData, inputNumber] = input;
let result = 0;
const numberDataArray = numberData.split(" ");
numberDataArray.map((number) =>
  Number(number) === Number(inputNumber) ? result++ : number
);
console.log(result);
