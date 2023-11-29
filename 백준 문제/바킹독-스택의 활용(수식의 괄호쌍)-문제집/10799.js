const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

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
let cutBarCount = 0;
let prevCharacter = "";
let originalBarCount = 0;
for (const character of input) {
  if (stack.size === 0) {
    stack.push(character);
    prevCharacter = character;
    continue;
  }
  if (character === "(") {
    stack.push(character);
    prevCharacter = character;
    continue;
  }
  if (character === ")" && prevCharacter === "(") {
    stack.pop();
    prevCharacter = character;
    cutBarCount += stack.size;
    continue;
  }
  if (character === ")" && stack.top() === "(") {
    stack.pop();
    originalBarCount++;
  }
}
console.log(originalBarCount + cutBarCount);

// const input = "()(((()())(())()))(())";
