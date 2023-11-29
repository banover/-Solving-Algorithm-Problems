const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .split(" ");

const numbers = Number(input[0][0]);
const count = Number(input[0][1]);
const willBePrintedNumbers = input[1].map(Number);

class Deque {
  constructor(numbers) {
    this.arr = Array.from({ length: numbers }, (cur, index) => index + 1);
  }

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

const deque = new Deque(numbers);
// let currentPosition = 1;
let answer = 0;
willBePrintedNumbers.forEach((number) => {
  const distanceFromHead = Math.abs(deque.front() - number);
  const distanceFromTail = Math.abs(deque.back() - number);
  if (distanceFromHead > distanceFromTail) {
    if (deque.back() === number) {
      deque.pop_back();
      return;
    }

    while (deque.back() !== number) {
      push_front(deque.pop_back());
      answer++;
    }
    deque.pop_back();
  } else {
  }
});

// 다시 풀어보자
