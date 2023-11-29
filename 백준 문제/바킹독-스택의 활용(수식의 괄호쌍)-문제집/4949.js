const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1); // 그냥 pop을 사용할걸..

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

const answer = [];
input.forEach((sentence) => {
  const stack = new Stack();
  let balance = true;
  for (const character of sentence) {
    if (character === "(" || character === "[") {
      stack.push(character);
    }
    if (character === ")") {
      const popedItem = stack.pop();
      if (popedItem !== "(") {
        balance = false;
        break;
      }
    }
    if (character === "]") {
      const popedItem = stack.pop();
      if (popedItem !== "[") {
        balance = false;
        break;
      }
    }
  }
  if (stack.size !== 0 || !balance) {
    answer.push("no");
  } else {
    answer.push("yes");
  }
});

console.log(answer.join("\n"));

// const input = [
//     "So when I die (the [first] I will see in (heaven) is a score list).",
//     "[ first in ] ( first out ).",
//     "Half Moon tonight (At least it is better than no Moon at all].",
//     "A rope may form )( a trail in a maze.",
//     "Help( I[m being held prisoner in a fortune cookie factory)].",
//     "([ (([( [ ] ) ( ) (( ))] )) ]).",
//     " .",
//   ];

//참고코드.
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// input.pop();

// const solution = (sentences) => {
//   const targets = '()[]';
//   const answer = sentences.map((sentence) => {
//     const stack = [];
//     for (const ch of sentence) {
//       if (!targets.includes(ch)) continue;
//       if (ch === '(' || ch === '[') stack.push(ch);
//       else if (ch === ')') {
//         if (stack.length === 0 || stack[stack.length - 1] !== '(') return 'no';
//         stack.pop();
//       } else if (ch === ']') {
//         if (stack.length === 0 || stack[stack.length - 1] !== '[') return 'no';
//         stack.pop();
//       }
//     }
//     if (stack.length !== 0) return 'no';
//     return 'yes';
//   });
//   return answer.join('\n');
// };

// console.log(solution(input));
