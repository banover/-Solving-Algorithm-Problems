/*
문제: 큐를 구현한 후, 여섯가지 명령을 처리하는 프로그램 작성하기
input : 명령의 수, 명령 배열
output : 명령의 결과값
labeling : 함수 - executingQueueCommand, input - numberOfCommands, commandArray, output - result
*/

// class Node {
//   constructor(item) {
//     this.item = item;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(item) {
//     const node = new Node(item);
//     if (this.head === null) {
//       this.head = node;
//       this.head.next = null;
//     } else {
//       this.tail.next = node;
//     }

//     this.tail = node;
//     this.length += 1;
//   }

//   pop() {
//     if (this.empty() == 1) return -1;
//     const popItem = this.head;
//     this.head = this.head.next;
//     this.length -= 1;
//     return popItem.item;
//   }

//   size() {
//     return this.length;
//   }

//   empty() {
//     if (this.length == 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   front() {
//     if (this.empty() == 1) return -1;
//     return this.head.item;
//   }

//   back() {
//     if (this.empty() == 1) return -1;
//     return this.tail.item;
//   }
// }

// const commandArray = [
//   "push 1",
//   "push 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop",
//   "pop",
//   "pop",
//   "size",
//   "empty",
//   "pop",
//   "push 3",
//   "empty",
//   "front",
// ];

const fs = require("fs");
const [n, ...commandArray] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

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

  push(value) {
    let newValue = new Node(value);
    if (this.size === 0) {
      this.first = newValue;
      this.last = newValue;
    } else {
      this.last.next = newValue;
      this.last = newValue;
    }
    this.size++;
  }

  pop() {
    if (!this.first) {
      return -1;
    }
    let removedValue = this.first.value;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedValue;
  }

  sizes() {
    return this.size;
  }

  empty() {
    if (this.size === 0) {
      return 1;
    }
    return 0;
  }

  front() {
    if (this.first.value) {
      return this.first.value;
    }
    return -1;
  }

  back() {
    if (this.last.value) {
      return this.last.value;
    }
    return -1;
  }
}

const commands = commandArray.map((command) => command.split(" "));
const queue = new Queue();
let answer = [];

for (let i = 0; i < commands.length; i++) {
  const command = commands[i];
  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.sizes());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
  }
}

console.log(answer.join("\n"));

// 문제가 쓰레기다. 이해가 안된다. 왜 정답이 안되는지..


// 참고 코드

// const fs = require('fs');
// const [n,...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");


// class Node{
//     constructor(item){
//       this.item = item;
//       this.next = null;
//     }
//   }
  
//   class Queue{
//     constructor(){
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }
  
//     push(item){
//       const node = new Node(item)
//       if(this.head===null){
//         this.head= node;
//         this.head.next = null;
//       }else{
//         this.tail.next = node;
//       }
  
//       this.tail = node;
//       this.length +=1;
//     }
  
//     pop(){
//         if(this.empty()==1) return -1
//       const popItem = this.head;
//       this.head = this.head.next;
//       this.length -=1;
//       return popItem.item;
//     }
  
//     size(){
//       return this.length;
//     }
  
//     empty(){
//       if(this.length==0){
//         return 1;
//       }else{
//         return 0;
//       }
//     }
  
//     front(){
//       if(this.empty()==1) return -1;
//       return this.head.item; 
//     }
  
//     back(){
//       if(this.empty()==1) return -1;
//       return this.tail.item; 
//     }
//   }  

// let answer = [];
// let queue = new Queue(); 
// const command = arr.map(v=>v.split(' '));
// command.forEach(v=>{
//     switch(v[0]){
//         case 'push':
//             queue.push(v[1])
//             break;
//         case 'pop':
//             answer.push(queue.pop());
//             break;
//         case 'size':
//             answer.push(queue.size())
//             break;
//         case 'empty':
//             answer.push(queue.empty())
//             break;
//         case 'front':
//             answer.push(queue.front())
//             break;
//         case 'back':
//             answer.push(queue.back())
//             break;
//     }
// })

// console.log(answer.join('\n'))