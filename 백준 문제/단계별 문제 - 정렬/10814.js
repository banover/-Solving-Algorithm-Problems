/*
문제: 사람들의 나이와 이름이 가입순으로 주어질 때, 회원들의 나이 증가순으로 정렬하되 나이가 같으면 선가입자가 먼저 정렬되게 하기
input : 회원의 수, 회원의 나이-이름 배열
output : 회원 나이 이름 정렬 배열
labeling : 함수 - printSortedPersonData, input - numberOfperson, personDataArray, output - result;
*/

// const input = ["21 Junkyu", "21 Dohyun", "20 Sunyoung"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const personDataArray = input.map((person) => person.split(" "));

personDataArray.sort((a, b) => {
  if (Number(a[0]) === Number(b[0])) {
    return 0;
  }
  return Number(a[0]) - Number(b[0]);
});

const result = personDataArray.map((person) => person.join(" ")).join("\n");
console.log(result);
