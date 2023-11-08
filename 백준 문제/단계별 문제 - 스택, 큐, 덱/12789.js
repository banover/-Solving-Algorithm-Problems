/*
문제: 1열의 줄에 사람들이 기다리고 있을 때, 각 사람들은 대기표를 가지고 있다. 대기표의 순서대로 간식을 받을 수 있을 때, 마지막 순번의 학생(승환)이 간식을 받을 수 있는지 여부를 출력하기
input :  승환이 앞에 줄서있는 사람 수, 승환이 앞에 서있는 사람들의 번호표
output : 승환이 간식 배식 여부
labeling : 함수 - canHeGetFood, input - numberOfStudents, numberTickeyArray, output - result
*/
// const numberTickeyArray = [5, 4, 1, 3, 2];

const numberTicketArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map((ticket) => Number(ticket));

// const numberTicketArray = [5, 4, 1, 3, 2];
console.log(getAnswer(numberTicketArray));

function getAnswer(numberTicketArray) {
  const stack = [];
  let count = 1;

  for (let ticketNumber of numberTicketArray) {
    if (ticketNumber === count) {
      count = ticketNumber + 1;
      continue;
    }
    if (stack.length > 0 && ticketNumber > count) {
      if (stack[stack.length - 1] === count) {
        count = stack.pop() + 1;

        continue;
      }

      stack.push(ticketNumber);
      continue;
    }
    stack.push(ticketNumber);
  }

  while (stack.length) {
    const nextPerson = stack.pop();
    if (nextPerson !== count) {
      break;
    }
    count = nextPerson + 1;
  }
  return stack.length ? "Sad" : "Nice";
}

// 위 코드가 틀린 이유, 새로운 줄에 대기하던 친구가 간식을 받으면, 기존의 줄에 있던 학생은 그 다음 순번과 비교해야한다. 그 다음 학생으로 넘어가면 빵꾸가 나는 것이다.
//  이걸.. 몇 시간동안..ㅠㅠ

// 참고 코드

// const numberTicketArray = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")[1]
//   .split(" ")
//   .map((ticket) => Number(ticket));

// const main = () => {
//   let [store, stack] = [0, []];
//   for (let i = 0; i < numberTicketArray.length; ++i) {
//     while (
//       (stack.length && stack[stack.length - 1] === store + 1) ||
//       numberTicketArray[i] === store + 1
//     ) {
//       if (stack[stack.length - 1] === store + 1) {
//         store = stack.pop();
//       } else {
//         store = numberTicketArray[i];
//         break;
//       }
//     }

//     if (store !== numberTicketArray[i]) stack.push(numberTicketArray[i]);
//   }
//   while (stack.length && stack[stack.length - 1] === store + 1) {
//     if (stack[stack.length - 1] === store + 1) {
//       store = stack.pop();
//     }
//   }
//   return stack.length ? "Sad" : "Nice";
// };

// console.log(main());
