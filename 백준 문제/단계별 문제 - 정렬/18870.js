/*
문제: 수직선 위 좌표 n개가 있을 때, 좌표압축한 결과를 출력하기, xi의 좌표압축은 xi > xj를 만족하는 서로다른 xj의 개수
input : 좌표개수, 좌표배열
output : 좌표압축 나열
labeling : 함수 - printCoordinateCompression, input - numberOfCoordinate, coordinateArray, output - result
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const coordinateArray = input[0]
  .split(" ")
  .map((coordinateX) => Number(coordinateX));

let sortedCoordinateArray = [...new Set(coordinateArray)];
sortedCoordinateArray.sort((a, b) => a - b);

const coordinateCompression = {};
sortedCoordinateArray.map((coordinateX, index) => {
  coordinateCompression[coordinateX] = index;
});

let result = [];
coordinateArray.map((coordinateX) => {
  result.push(coordinateCompression[coordinateX]);
});

console.log(result.join(" "));

// const result = coordinateArray
//   .map((coordinateX) => sortedCoordinateArray.indexOf(coordinateX))
//   .join(" ");
// 시간초과로 걸린다.
