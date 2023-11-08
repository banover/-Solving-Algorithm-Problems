/*
문제: 번호가 적힌 순서대로 놓여있는 카드를 위에서 한장 버리고 그 다음 카드를 맨 아래로 두는 행위를 번갈아 하면서, 맨 마지막에 남은 카드의 숫자를 출력하는 함수 만들기
input : 카드개수
output : 맨 마지막 카드 숫자
labeling : 함수 - getLastCardNumber, input - numberOfCards, output - result
*/

// JavaScript program for linked-list implementation of queue
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

const numberOfCards = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

const queue = new Queue();
for (let i = 1; i <= numberOfCards; i++) {
  queue.enqueue(i);
}

while (queue.size !== 1) {
  queue.dequeue();
  const cardToBePlaceBottom = queue.dequeue();
  queue.enqueue(cardToBePlaceBottom.value);
}

console.log(queue.peek().value);
