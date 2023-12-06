const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [row, column] = input.shift().split(" ").map(Number);
const maze = input.map((row) => row.split("").map(Number));

const visitedArea = maze.map((row) => row.map((value) => false));
const distanceCoordinate = maze.map((row) => row.map((value) => 0));
const adjacentCoordinate = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const queue = [];
queue.push([0, 0]);
visitedArea[0][0] = true;
distanceCoordinate[0][0] = 1;
while (queue.length) {
  const [currentX, currentY] = queue.shift();

  for (let i = 0; i < adjacentCoordinate.length; i++) {
    const xPosition = currentX + adjacentCoordinate[i][0];
    const yPosition = currentY + adjacentCoordinate[i][1];
    if (
      xPosition >= 0 &&
      xPosition < row &&
      yPosition >= 0 &&
      yPosition < column &&
      !visitedArea[xPosition][yPosition] &&
      maze[xPosition][yPosition]
    ) {
      visitedArea[xPosition][yPosition] = true;
      distanceCoordinate[xPosition][yPosition] =
        distanceCoordinate[currentX][currentY] + 1;

      queue.push([xPosition, yPosition]);
    }
  }
}

console.log(distanceCoordinate[row - 1][column - 1]);

// const [row, column] = [4, 6];

// const maze = [
//   [1, 0, 1, 1, 1, 1],
//   [1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1],
//   [1, 1, 1, 0, 1, 1],
// ];

// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < column; j++) {
// if (i === 0 && j === 0) {
//     queue.push([0, 0]);
//     }
//     if (!visitedArea[i][j] && maze[i][j]) {
//       while (queue.length) {
//         const [currentX, currentY] = queue.shift();
//         for (let i = 0; i < adjacentCoordinate.length; i++) {
//           const xPosition = currentX + adjacentCoordinate[i][0];
//           const yPosition = currentY + adjacentCoordinate[i][1];
//           if (
//             xPosition >= 0 &&
//             xPosition < row &&
//             yPosition >= 0 &&
//             yPosition < column &&
//             !visitedArea[xPosition][yPosition] &&
//             maze[xPosition][yPosition]
//           ) {
//             visitedArea[xPosition][yPosition] = true;
//             shortestDistance++;
//             queue.push([xPosition, yPosition]);
//           }
//         }
//       }
//     }
//       }
//     }
