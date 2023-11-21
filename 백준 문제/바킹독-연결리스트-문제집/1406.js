const [displayedString, commandCount, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

let linkedList = null;
for (let i = 0; i < Number(commandCount); i++) {
  if (i === 0) {
    linkedList = new LinkedList(new Node(displayedString[i]));
  }
  linkedList.getLast().next = new Node(displayedString[i]);
}

// 참고코드

// const [a, b, ...arr] = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split(/\r\n/);

// //const [a, b, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/);

// function solution(a, arr) {
//   const answer = [];
//   const LStack = a.split(""); // 커서의 왼쪽 stack
//   const RStack = []; // 커서의 오른쪽 stack

//   // 1) 입력 값 만큼 반복한다.
//   arr.forEach((item) => {
//     const [command, val] = item.split(" "); // 입력 값 변수 선언

//     /*
//        2) LStack의 길이가 0이 아닐 경우만, 왼쪽으로 커서 이동(L)
//           커서가 왼쪽으로 이동하기 때문에 RStack에 쌓는다.
//     */
//     if (command === "L" && LStack.length) RStack.push(LStack.pop());
//     /*
//         3) RStack의 길이가 0이 아닐 경우만, 오른쪽으로 커서 이동(D)
//            마찬가지 이유로 LStack에 쌓는다.
//     */ else if (command === "D" && RStack.length) LStack.push(RStack.pop());
//     // 4) 삭제할 경우(B) LStack에서 지운다.
//     else if (command === "B") LStack.pop();
//     // 5) 추가한 경우(P) LStack에 쌓는다
//     else if (command === "P") LStack.push(val);
//   });

//   // 6) 왼쪽(LStack)부터 오른쪽(RStack) 값을 출력한다.
//   console.log([...LStack, ...RStack.reverse()].join(""));
// }
// solution(a, arr);
