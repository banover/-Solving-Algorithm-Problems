const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const towerCount = Number(input[0]);
const towerHeights = input[1].split(" ").map(Number);

const towerCount = 5;
const towerHeights = [6, 9, 5, 7, 4];
// class Stack {
//   arr = [];

//   get size() {
//     return this.arr.length;
//   }

//   push(value) {
//     this.arr.push(value);
//   }

//   pop() {
//     return this.size > 0 ? this.arr.pop() : -1;
//   }

//   empty() {
//     return this.size === 0 ? 1 : 0;
//   }

//   top() {
//     return this.size > 0 ? this.arr.at(-1) : -1;
//   }
// }

let answer = [];
// const stack = new Stack();
const stack = towerHeights;
// towerHeights.forEach((height) => {
//   stack.push(height);
// });

towerHeights.forEach((height, i) => {
  let index = i;
  let connected = false;

  if (index === 0) {
    answer.push(0);
    return;
  }

  for (let j = index - 1; j >= 0 && j < index; j--) {
    // if (stack.arr[j] > height) {
    if (stack[j] > height) {
      //   answer.push(stack.arr.indexOf(stack.arr[j]) + 1);
      answer.push(stack.indexOf(stack[j]) + 1);
      connected = true;
      break;
    }
  }
  if (!connected) {
    answer.push(0);
  }
});

console.log(answer.join(" "));

// const towerCount = 5;
// const towerHeights = [6, 9, 5, 7, 4];

// 위 풀이는 시간초과이다!!
