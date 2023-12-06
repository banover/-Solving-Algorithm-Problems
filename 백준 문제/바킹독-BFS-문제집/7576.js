const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [column, row] = input.shift().split(" ").map(Number);
const storage = input.map((row) => row.split(" ").map(Number));
const visitedStorage = storage.map((row) => row.map((value) => false));
const daysMap = storage.map((row) => row.map((value) => 0));
const adjacentCoordinate = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const queue = [];
let ripedTomatos = 0;
let finish = false;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    if (storage[i][j] === 1) {
      ripedTomatos++;
      continue;
    }
  }
}

if (ripedTomatos === row * column) {
  finish = true;
  console.log("0");
}

if (!finish) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (storage[i][j] === -1) {
        continue;
      }
      if (storage[i][j] && !visitedStorage[i][j]) {
        queue.push([i, j]);
        visitedStorage[i][j] = true;
      }

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
            !visitedStorage[xPosition][yPosition]
          ) {
            visitedStorage[xPosition][yPosition] = true;
            if (storage[xPosition][yPosition] !== -1) {
              storage[xPosition][yPosition] = 1;
              daysMap[xPosition][yPosition] = daysMap[currentX][currentY] + 1;
              queue.push([xPosition, yPosition]);
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (visitedStorage[i][j] === true) {
        continue;
      } else {
        console.log("-1");
        finish = true;
        break;
      }
    }
    if (finish) {
      break;
    }
  }

  if (!finish) {
    let maxday = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        if (daysMap[i][j] > maxday) {
          maxday = daysMap[i][j];
        }
      }
    }
    console.log(maxday);
  }
}

// const [column, row] = [6, 4];
// const storage = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1],
// ];

// 참고코드
/*
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(s => s.split(" ")).slice(0,-1);
const NM = input.shift();
const [n,m] = NM.map(el => Number(el));
const board = input.map(s => s.map(el => Number(el)));

const dx=[1, 0, -1, 0];
const dy=[0, 1, 0, -1];

function solution(row,col,board) {
    const q = [];
    const dist = [...Array(col)].map(() => Array(row).fill(0));
    for (let i=0; i < col; i++) {
        for (let j=0; j < row; j++) {
            // 익은 토마토일 시 queue에 넣어 주변 익지않은 토마토 탐색
            if (board[i][j] === 1) {
                q.push([i,j]);
            }
            // 익지 않은 토마토일 시
            if (board[i][j] === 0) {
                dist[i][j] = -1;
            }
        }
    }
    let head = 0;
    // 익은토마토만 q에 있음
    while (q.length > head) {
        const [x,y] = q[head++];
        for (let k=0; k<4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
            // 익은 토마토 / 빈칸일시 넘어가기
            if (dist[nx][ny] >= 0) continue;
            // 익지않은 토마토에 대해 +1
            dist[nx][ny] = dist[x][y] + 1;
            // 주변 토마토 탐색
            q.push([nx,ny]);
        }
    }
    
    // 토마토가 익을 때까지의 최소 날짜 출력
    let day = 0;
    for (let i=0; i < col; i++) {
        for (let j=0; j < row; j++) {
            // 익지 않은 토마토가 있음
            if (dist[i][j] === -1) return -1;
            day = Math.max(day, dist[i][j]);
        }
    }
    return day;
}

console.log(solution(n,m,board));
*/
