const [totalNumber, ...sequence] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

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

const stack = new Stack();
let count = 1;

let expectedResult = [];
let answer = [];
sequence.forEach((number) => {
  while (stack.arr.at(-1) < number || stack.arr.at(-1) == null) {
    stack.push(count);
    count++;
    answer.push("+");
  }
  expectedResult.push(stack.pop());
  answer.push("-");
});

expectedResult = expectedResult.join(" ");
if (expectedResult === sequence.join(" ")) {
  console.log(answer.join("\n"));
} else {
  console.log("NO");
}

// const totalNumber = 8;
// const sequence = [4, 3, 6, 8, 7, 5, 2, 1];
