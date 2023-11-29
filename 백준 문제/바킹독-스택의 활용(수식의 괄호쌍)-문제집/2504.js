const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

class Stack {
  arr = [];

  get size() {
    return this.arr.length;
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.size > 0 ? this.arr.pop() : -1;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  top() {
    return this.size > 0 ? this.arr.at(-1) : -1;
  }
}

let answer = 0;
let tempSum = 0;
let leftbehindValue = 0;
const stack = new Stack();

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" || input[i] === "[") {
    stack.push(input[i]);
    if (input[i - 1] === ")" || input[i - 1] === "]") {
      leftbehindValue += tempSum;
      tempSum = 0;
      continue;
    }
  }
  if (input[i] === ")") {
    const topItem = stack.top();
    if (topItem === "(") {
      // stack.pop();
      if (stack.pop() === -1) {
        answer = "0";
        break;
      }
      if (stack.size === 0) {
        if (input[i - 1] === ")" || input[i - 1] === "]") {
          answer += (leftbehindValue + tempSum) * 2;
          leftbehindValue = 0;
          tempSum = 0;
        }
      }
      if (input[i - 1] === ")" || input[i - 1] === "]") {
        tempSum *= 2;
        continue;
      }
      tempSum += 2;
      continue;
    }
    answer = "0";
    break;
  }
  if (input[i] === "]") {
    const topItem = stack.top();
    if (topItem === "[") {
      if (stack.pop() === -1) {
        answer = "0";
        break;
      }
      if (stack.size === 0) {
        if (input[i - 1] === ")" || input[i - 1] === "]") {
          answer += (leftbehindValue + tempSum) * 3;
          leftbehindValue = 0;
          tempSum = 0;
        }
      }
      if (input[i - 1] === ")" || input[i - 1] === "]") {
        tempSum *= 3;
        continue;
      }
      tempSum += 3;
      continue;
    }
    answer = "0";
    break;
  }
}
if (stack.size > 0) {
  console.log("0");
} else {
  console.log(answer);
}

// const input = "(()[[]])([])";
