const [numberOfPeople, removedOrder] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let front = Array.from({ length: numberOfPeople }, (cur, index) => index + 1);
let back = [];

let answer = [];
let order = 0;
while (front.length + back.length > 0) {
  while (front.length > 3) {
    back.push(front.pop());
  }
  const removedPerson = front.pop();
  answer.push(removedPerson);
  //   while (front.length !== 0) {
  //     back.push(front.pop());
  //   }
  back = back.reverse();
  const temp = front;
  front = back;
  back = temp;
}
