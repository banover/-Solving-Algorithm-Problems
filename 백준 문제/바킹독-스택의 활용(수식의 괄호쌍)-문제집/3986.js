const [wordCount, ...words] = require("fs")
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
const filteredWords = words.filter((word) => word.length % 2 === 0);
let answer = 0;
filteredWords.forEach((word) => {
  const stack = new Stack();
  let prevChar = "";
  for (const character of word) {
    if (stack.size === 0) {
      stack.push(character);
      prevChar = character; // prevChar대신에 stack의 top method 활용하는 것이 더..
      continue;
    }
    if (stack.size !== 0) {
      if (prevChar === character) {
        stack.pop();
        if (stack.size > 0) {
          prevChar = stack.pop();
          stack.push(prevChar);
        } else {
          prevChar = "";
        }
        continue;
      }
      if (prevChar !== character) {
        stack.push(character);
        prevChar = character;
      }
    }
  }

  if (stack.size === 0) {
    answer++;
  }
});

console.log(answer);

// const words = ["ABAB", "AABB", "ABBA"];
