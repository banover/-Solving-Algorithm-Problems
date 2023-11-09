/*
문제: 두 수가 주어졌을 때, 이 두 수를 input으로 하는 요세푸스 순열 구하는 함수 만들기
input : 앉아 있는 사람 총 수, 제거할 자리 번호
output : 제거된 자리 번호 순열
labeling : 함수 - calculatePermutation, input - numberOfPeople, removedNumber, output - result
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const itemToBeRemoved = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return itemToBeRemoved;
  }

  peek() {
    return this.first;
  }
}

const [numberOfPeople, removedNumber] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((input) => Number(input));

const queue = new Queue();

for (let i = 1; i <= numberOfPeople; i++) {
  queue.enqueue(i);
}

let result = "<";
while (queue.size > 1) {
  for (let j = 1; j < removedNumber; j++) {
    queue.enqueue(queue.dequeue().value);
  }

  result += `${queue.dequeue().value}, `;
}
result += `${queue.dequeue().value}>`;
console.log(result);
