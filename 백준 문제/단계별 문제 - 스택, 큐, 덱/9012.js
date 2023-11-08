"strict mode";
/*
문제: 괄호문자열이 주어질 때, VPS인지 아닌지 판단해서, 결과를 YES/NO로 출력하기
input : 괄호문자열 갯수, 괄호문자열 배열
output : 괄호문자열 배열마다 YES/NO 둘 중 하나 출력
labeling : 함수 - printVpsResult, input - numberOFPs, psArray, output - result
*/

// const input = [
//   "6",
//   "(())())",
//   "(((()())()",
//   "(()())((()))",
//   "((()()(()))(((())))()",
//   "()()()()(()()())()",
//   "(()((())()(",
// ];

// const input = ["3", "((", "))", "())(()"];

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const psArray = input.map((ps) => ps.split(""));

let result = [];
psArray.map((ps) => {
  const stack = [];
  let VPS = "YES";
  ps.map((character) => {
    if (character === "(") {
      stack.push(1);
      return;
    }

    if (character === ")" && !stack.pop()) {
      return (VPS = "NO");
    }
    // return (VPS = "YES");
  });
  VPS = stack.length === 0 && VPS === "YES" ? "YES" : "NO";
  result.push(VPS);
});

console.log(result.join("\n"));
