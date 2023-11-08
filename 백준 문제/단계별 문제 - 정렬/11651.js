/*
문제: 좌표평면 위의 점 N개가 있을 때, y좌표 증가 순, y좌표가 같으면, x좌표가 증가하는 순서로 정렬하기 
input : 점의 개수, 점 좌표
output : 정렬된 좌표
labeling : 함수 - printSortedCoordinatePoints, input - numberOfDots, coordinatePointsArray, output - result
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const coordinatePointsArray = input.map((number) =>
  number.split(" ").map((number) => Number(number))
);
coordinatePointsArray.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

const result = coordinatePointsArray
  .map((coordinateArray) => coordinateArray.join(" "))
  .join("\n");
console.log(result);
