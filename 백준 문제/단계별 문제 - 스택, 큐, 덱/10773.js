/*
문제: 나열된 수 중에서, 0이 나올 때마다 가장 최근 쓴 값을 지운다. 후에 나열된 수들의 총합을 구하기
input : 나열될 수 개수, 수나열 
output : 나열된 수의 총합
labeling : 함수 - pritnTotalSum, input - numberOfNumbers, numberArray, output - result
*/
// const numberArray = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newValue = new Node(value);
    if (this.size > 0) {
      const previousValue = this.first;
      this.first = newValue;
      this.first.next = previousValue;
    }

    if (!this.size) {
      this.first = newValue;
      this.last = newValue;
    }
    return this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    if (this.size === 1) {
      this.last = null;
    }

    const removedValue = this.first;
    this.first = this.first?.next;
    this.size--;
    return removedValue;
  }
}

const numberArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((number) => Number(number));

numberArray.shift();
const newStack = new Stack();
numberArray.map((number) => {
  if (number === 0) {
    newStack.pop();
    return;
  }
  newStack.push(number);
});

let result = 0;
while (newStack.last !== null) {
  result += newStack.first?.value;
  newStack.pop();
}
console.log(result);
