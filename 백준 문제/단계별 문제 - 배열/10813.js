/* 
문제: 바구니 수와 공을 교환할 횟수가 주어졌을 때, 교환 후에 바구니에 들어있는 공의 숫자를 나열
input: 바구니 수, 공교환 횟수, 바꿀 바구니 두 개 --- number
output: 바구니에 들어있는 공 숫자 나열 --- number
labeling: 함수 - getNumbersOfBasket, input - totalBasket, theNumberOfChange, startBasket, endBasket
*/

// nodejs version

// const totalBasket = 5;
// const theNumberOfChange = 4;
// const input = ["5 4", "1 2", "3 4", "1 4", "2 2"];

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[totalBasket, theNumberOfChange] = input[0].split(" ").map((el) => Number(el));

let result = Array.from(Array(totalBasket).keys(), (key) => key + 1);
for (let i = 1; i <= theNumberOfChange; i++) {
  [startBasket, endBasket] = input[i].split(" ").map((el) => Number(el));
  const startBasketBallNumber = result[startBasket - 1];
  const endBasketBallNumber = result[endBasket - 1];
  result[startBasket - 1] = endBasketBallNumber;
  result[endBasket - 1] = startBasketBallNumber;
}

result = result.join(" ");
console.log(result);
