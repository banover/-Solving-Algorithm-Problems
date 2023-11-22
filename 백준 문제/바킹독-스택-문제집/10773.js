const [commandCount, ...amounts] = require("fs")
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
amounts.forEach((amount) => {
  if (amount === 0) {
    stack.pop();
    return;
  }
  stack.push(amount);
});

console.log(stack.arr.reduce((sum, amount) => sum + amount, 0));

// const amounts = [3, 0, 4, 0];
