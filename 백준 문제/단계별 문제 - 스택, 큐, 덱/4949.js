/*
문제: 문자열에 포함되는 괄호와 문자열이 균형을 이루는지 판단하기
input : 문자열 
output : 균형 값
labeling : 함수 - printbalanceValue, input - stringArray, output - answer;
*/

// const stringArray = [
//   "So when I die (the [first] I will see in (heaven) is a score list).",
//   "[ first in ] ( first out ).",
//   "Half Moon tonight (At least it is better than no Moon at all].",
//   "A rope may form )( a trail in a maze.",
//   "Help( I[m being held prisoner in a fortune cookie factory)].",
//   "([ (([( [ ] ) ( ) (( ))] )) ]).",
//   " .",
// ];

const stringArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

stringArray.pop();

const targets = "()[]";
const answer = stringArray.map((string) => {
  const stack = [];
  let result = "yes";

  for (let i = 0; i < string.length; i++) {
    if (!targets.includes(string[i])) continue;
    if (string[i] === "(") {
      stack.push(1);
      continue;
    }
    if (string[i] === ")") {
      const removeValueFromStack = stack.pop();
      if (removeValueFromStack === undefined || removeValueFromStack === 2) {
        result = "no";

        return "no";
      }
    }
    if (string[i] === "[") {
      stack.push(2);
      continue;
    }
    if (string[i] === "]") {
      const removeValueFromStack = stack.pop();
      if (removeValueFromStack === undefined || removeValueFromStack === 1) {
        result = "no";
        return "no";
      }
    }
  }
  if (stack.length !== 0) {
    return "no";
  }
  return "yes";
});
console.log(answer.join("\n"));
