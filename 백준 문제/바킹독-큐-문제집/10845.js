const [commandCount, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

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
let answer = "";
commands.forEach((com) => {
  const command = com.split(" ");

  switch (command[0]) {
    case "push":
      queue.enqueue(Number(command[1]));
      break;
    case "pop":
      if (queue.length === 0) {
        answer += "-1" + "\n";
        break;
      }
      answer += `${queue.dequeue()}` + "\n";
      break;
    case "size":
      answer += `${queue.length}` + "\n";
      break;
    case "empty":
      if (queue.length === 0) {
        answer += `1` + "\n";
        break;
      }
      answer += `0` + "\n";
      break;
    case "front":
      if (queue.length === 0) {
        answer += `-1` + "\n";
        break;
      }
      answer += `${queue.peek()}` + "\n";
      break;

    case "back":
      if (queue.length === 0) {
        answer += `-1` + "\n";
        break;
      }
      answer += `${queue.arr[queue.length - 1]}` + "\n";
      break;
    default:
      break;
  }
});

console.log(answer);

// const commands = [
//     "push 1",
//     "push 2",
//     "front",
//     "back",
//     "size",
//     "empty",
//     "pop",
//     "pop",
//     "pop",
//     "size",
//     "empty",
//     "pop",
//     "push 3",
//     "empty",
//     "front",
//   ];
