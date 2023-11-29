const [commandCount, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Deque {
  arr = [];

  push_back(value) {
    return this.arr.unshift(value);
  }

  pop_back() {
    return this.arr.length === 0 ? -1 : this.arr.shift();
  }

  pop_front() {
    return this.arr.length === 0 ? -1 : this.arr.pop();
  }

  push_front(value) {
    return this.arr.push(value);
  }

  front() {
    return this.arr.length === 0 ? -1 : this.arr.at(-1);
  }

  back() {
    return this.arr.length === 0 ? -1 : this.arr.at(0);
  }

  size() {
    return this.arr.length;
  }

  empty() {
    return this.arr.length === 0 ? 1 : 0;
  }
}

let answer = [];
const deque = new Deque();
commands.forEach((com) => {
  const command = com.split(" ");
  switch (command[0]) {
    case "push_back":
      deque.push_back(command[1]);
      break;

    case "push_front":
      deque.push_front(command[1]);
      break;
    case "pop_back":
      answer.push(deque.pop_back());
      break;

    case "pop_front":
      answer.push(deque.pop_front());
      break;

    case "size":
      answer.push(deque.size());
      break;
    case "empty":
      answer.push(deque.empty());
      break;
    case "front":
      answer.push(deque.front());
      break;
    case "back":
      answer.push(deque.back());
      break;
  }
});

console.log(answer.join("\n"));

// const commands = [
//     "push_back 1",
//     "push_front 2",
//     "front",
//     "back",
//     "size",
//     "empty",
//     "pop_front",
//     "pop_back",
//     "pop_front",
//     "size",
//     "empty",
//     "pop_back",
//     "push_front 3",
//     "empty",
//     "front",
//   ];
