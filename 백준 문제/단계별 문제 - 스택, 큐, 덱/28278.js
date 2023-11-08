/*
문제: 정수를 저장하는 스택을 구현한 후, 주어지는 명령을 처리하기
input : 명령의 수, 명령
output : 명령의 결과
labeling : 함수 - executeCommand, input - numberOfCommand, commandsArray, output - result
*/

"strict mode";

// const input = ["4", "1 3", "1 5", "3", "2", "5", "2", "2", "5"];

//
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(value) {
//     const newValue = new Node(value);
//     if (this.size === 0) {
//       this.first = newValue;
//       this.last = newValue;
//     } else {
//       const previousValue = this.first;
//       this.first = newValue;
//       this.first.next = previousValue;
//     }
//     return this.size++;
//   }

//   pop() {
//     if (this.size === 0) {
//       return null;
//     }
//     if (this.size === 1) {
//       this.last = null;
//     }
//     const removedValue = this.first;
//     this.first = this.first.next;
//     this.size--;
//     return removedValue;
//   }
// }

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// input.shift();

// const commandsArray = input.map((command) =>
//   command.split(" ").map((number) => Number(number))
// );

// let newStack = new Stack();
// commandsArray.map((command) => executeCommand(command));

// function executeCommand(command) {
//   if (command[0] === 1) {
//     return newStack.push(command[1]);
//   }
//   if (command[0] === 2) {
//     const popValue = newStack.pop();
//     return popValue === null ? console.log(-1) : console.log(popValue.value);
//   }
//   if (command[0] === 3) {
//     return console.log(newStack.size);
//   }
//   if (command[0] === 4) {
//     return newStack.size === 0 ? console.log(1) : console.log(0);
//   }
//   if (command[0] === 5) {
//     return newStack.size === 0
//       ? console.log(-1)
//       : console.log(newStack.first.value);
//   }
// }

//
// const input = ["4", "1 3", "1 5", "3", "2", "5", "2", "2", "5"];
// input.shift();

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[numberOfCommand, ...restCommand] = input;

const commandsArray = restCommand.map((command) =>
  command.split(" ").map((number) => Number(number))
);

let newStack = [];
const result = [];
commandsArray.map((command) => executeCommand(command));

console.log(result.join("\n"));

function executeCommand(command) {
  if (command[0] === 1) {
    return newStack.push(command[1]);
  }
  if (command[0] === 2) {
    const popValue = newStack.pop();
    // return popValue === undefined ? console.log(-1) : console.log(popValue);
    return popValue === undefined ? result.push(-1) : result.push(popValue);
  }
  if (command[0] === 3) {
    // return console.log(newStack.length);
    return result.push(newStack.length);
  }
  if (command[0] === 4) {
    // return newStack.length === 0 ? console.log(1) : console.log(0);
    return newStack.length === 0 ? result.push(1) : result.push(0);
  }
  if (command[0] === 5) {
    // return newStack.length === 0
    //   ? console.log(-1)
    //   : console.log(newStack[newStack.length - 1]);
    return newStack.length === 0
      ? result.push(-1)
      : result.push(newStack[newStack.length - 1]);
  }
}
