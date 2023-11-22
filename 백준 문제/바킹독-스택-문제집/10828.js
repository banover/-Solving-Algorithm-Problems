const [commandCount, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

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

let answer = "";
const stack = new Stack();

commands.forEach((com) => {
  const command = com.split(" ");
  if (command[0] === "push") {
    return stack.push(command[1]);
  }
  if (command[0] === "pop") {
    const popData = stack.pop();
    answer += popData + "\n";
    return popData;
  }
  if (command[0] === "size") {
    const size = stack.size;
    answer += size + "\n";
    return size;
  }
  if (command[0] === "empty") {
    const emptyValue = stack.empty();
    answer += emptyValue + "\n";
    return emptyValue;
  }
  if (command[0] === "top") {
    const topValue = stack.top();
    answer += topValue + "\n";
    return topValue;
  }
});

console.log(answer);

// const commands = [
//   "push 1",
//   "push 2",
//   "top",
//   "size",
//   "empty",
//   "pop",
//   "pop",
//   "pop",
//   "size",
//   "empty",
//   "pop",
//   "push 3",
//   "empty",
//   "top",
// ];
