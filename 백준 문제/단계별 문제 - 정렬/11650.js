/*
문제: 좌표평면 위 점 N개가 주어질 때, x좌표가 증가하는 순으로 정렬, x좌표가 같으면 y좌표증가순으로 정렬하고 출력하기 
input : 점의 개수, 점의 위치
output : 정렬한 결과(한줄 씩 print)
labeling : 함수 - getSortedNumberArray, input - numberOfdot, positionArray, output - result;
*/
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// [numberOfdot, ...positionArray] = input;

// const positionNumberArray = positionArray.map((item) => item.split(" "));

// for (let i = 0; i < positionNumberArray.length; i++) {
//   let currentValueX = +positionNumberArray[i][0];
//   let smallestValue = currentValueX;
//   let smallestValueIndex = i;
//   for (let j = i + 1; j < positionNumberArray.length; j++) {
//     let nextValueX = +positionNumberArray[j][0];
//     if (smallestValue > nextValueX) {
//       smallestValue = nextValueX;
//       smallestValueIndex = j;
//     }

//     if (j === positionNumberArray.length - 1) {
//       const temp = positionNumberArray[i];
//       positionNumberArray[i] = positionNumberArray[smallestValueIndex];
//       positionNumberArray[smallestValueIndex] = temp;
//     }
//   }
// }

// for (let i = 0; i < positionNumberArray.length; i++) {
//   let currentValueY = +positionNumberArray[i][1];
//   let smallestValue = currentValueY;
//   let smallestValueIndex = i;
//   for (let j = i + 1; j < positionNumberArray.length; j++) {
//     if (positionNumberArray[i][0] === positionNumberArray[j][0]) {
//       let nextValueY = +positionNumberArray[j][1];
//       if (smallestValue > nextValueY) {
//         smallestValue = nextValueY;
//         smallestValueIndex = j;
//       }
//     }

//     if (j === positionNumberArray.length - 1) {
//       const temp = positionNumberArray[i];
//       positionNumberArray[i] = positionNumberArray[smallestValueIndex];
//       positionNumberArray[smallestValueIndex] = temp;
//     }
//   }
// }

// let result = positionNumberArray.map((numberArray) => numberArray.join(" "));
// console.log(result.join("\n"));

// 참고 코드
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const N = input.shift();
// const coordsArr = input.map((coords) =>
//   coords.split(" ").map((nums) => parseInt(nums))
// );

// let results = "";
// coordsArr
//   .sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return a[0] - b[0];
//     }
//     return a[1] - b[1];
//   })
//   .forEach((coords) => {
//     results += `${coords[0]} ${coords[1]}\n`;
//   });

// console.log(results);

// 제출 코드
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[numberOfdot, ...positionArray] = input;

const positionNumberArray = positionArray.map((item) =>
  item.split(" ").map((number) => +number)
);

positionNumberArray.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
console.log(
  positionNumberArray.map((numberArray) => numberArray.join(" ")).join("\n")
);
