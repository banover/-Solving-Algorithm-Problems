const [width, ...paint] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const width = ["6 5"];
// const paint = [
//   "1 1 0 1 1",
//   "0 1 1 0 0",
//   "0 0 0 0 0",
//   "1 0 1 1 1",
//   "0 0 1 1 1",
//   "0 0 1 1 1",
// ];

const [row, column] = width[0].split(" ");
const paintedArea = paint.map((row) =>
  row.split(" ").map((box) => Number(box))
);

class Queue {
  arr = [];

  enqueue(value) {
    return this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

const queue = new Queue();
const experiencedArea = paintedArea.map((row) => row.map((num) => 0));
let count = 0;
let highestAreaWidth = 0;

queue.enqueue([0, 0]);
while (queue.lenght !== 0) {
  const currentArea = queue.dequeue();
  const xValue = currentArea[0];
  const yValue = currentArea[1];
  experiencedArea[xValue][yValue] = 1;

  if (paintedArea[xValue][yValue] !== 1 && queue.lenght === 0) {
    if (yValue + 1 < column) {
      queue.dequeue([xValue, yValue + 1]);
      break;
    }
    if (xValue + 1 < row) {
      queue.dequeue([xValue + 1, 0]);
      break;
    }
  }

  if (xValue - 1 > 0) {
    if (
      !experiencedArea[xValue - 1][yValue] &&
      paintedArea[xValue - 1][yValue] === 1
    ) {
      queue.enqueue([xValue - 1, yValue]);
    }
  }
  if (yValue - 1 > 0) {
    if (
      !experiencedArea[xValue][yValue - 1] &&
      paintedArea[xValue][yValue - 1] === 1
    ) {
      queue.enqueue([xValue, yValue - 1]);
    }
  }
  if (xValue + 1 < row) {
    if (
      !experiencedArea[xValue + 1][yValue] &&
      paintedArea[xValue + 1][yValue] === 1
    ) {
      queue.enqueue([xValue + 1, yValue]);
    }
  }
  if (yValue + 1 < column) {
    if (
      !experiencedArea[xValue][yValue + 1] &&
      paintedArea[xValue][yValue + 1] === 1
    ) {
      queue.enqueue([xValue, yValue + 1]);
    }
  }
}

/*
for (let i = 0; i < row; i++) {
  for (let j = 0; j < column; j++) {
    if (paintNumber[i][j] !== 1) {
      experiencedArea[i][j] = 1;
      continue;
    }
    queue.enqueue([i, j]);
    experiencedArea[i][j] = 1;
    // if (paintNumber[i][j] === 1) {
    // }
    if (i - 1 > 0) {
      if (!experiencedArea[i - 1][j]) {
        queue.enqueue([i - 1, j]);
      }
    }
    if (j - 1 > 0) {
      if (!experiencedArea[i][j - 1]) {
        queue.enqueue([i, j - 1]);
      }
    }
    if (i + 1 < row) {
      if (!experiencedArea[i + 1][j]) {
        queue.enqueue([i + 1, j]);
      }
    }
    if (j + 1 < column) {
      if (!experiencedArea[i][j + 1]) {
        queue.enqueue([i, j + 1]);
      }
    }

    // paintNumber[i][j]
  }
}
*/

// 참고 풀이
/*
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const paper = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = paper.shift();
const visited = Array.from(Array(N), () => Array(M).fill(false));
const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]]; // 인접한 네 곳(좌우상하) x,y좌표

// BFS
const bfs = (x, y) => {
  let cnt = 1; // 그림 넓이를 카운트할 변수. 초기값 1로 시작
  const queue = [[x, y]];
  while (queue.length) {
    const [cx, cy] = queue.shift();

	// 현재 위치 기준 인접한 네 곳 탐색할 반복문
    for (let i = 0; i < 4; i++) {
      const nx = cx + ds[i][0];
      const ny = cy + ds[i][1];
		
	  // 종이 밖으로 범위가 벗어나지 않았고, 방문하지 않았으며, 색이 칠해진 부분(value=1)이면
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && paper[nx][ny]) {
        visited[nx][ny] = true; // 방문 처리
        cnt++; // 그림 넓이 카운트 증가
        queue.push([nx, ny]); // 현재 위치 큐에 담기
      }
    }
  }
  return cnt; // 그림 넓이 카운트한 값 반환
};

let painting = 0; // 그림 개수 카운팅할 변수
let width = 0; // BFS 실행 후 결과값(현재 넓이) 담을 변수
let maxWidth = 0; // 최고 넓이값 담을 변수
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
		
	// 방문하지 않았고, 종이에 색이 칠해진 부분(1)이면
    if (!visited[i][j] && paper[i][j]) {
      visited[i][j] = true; // 방문 처리
      painting++; // 그림 개수 카운트 증가
      width = bfs(i, j); // 현재 그림의 넓이는 bfs 실행할 때마다 반환받은 결과값
      if (width > maxWidth) maxWidth = width; // 그림 넓이를 비교하여 큰 값이 최대 넓이가 됨
    }
  }
}

console.log(painting);
console.log(maxWidth);

*/
