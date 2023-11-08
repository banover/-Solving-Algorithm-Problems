/*
문제: 번호 한개와 3개의 알파벳이 같은 버튼을 이루는 다이얼 전화기가 있을 때, 1버튼을 누르는데 1초가 걸리고 값이 1커질수록 1초씩 늘어난다. 알파벳이 주어졌을 때 해당 전화번호에 전화를 걸기 위한 최소 시간 구하기
input : 알파벳으로 이뤄진 단어 1개(string)
output : 전화거는 최소 시간(number)
labeling : 함수 - getMinTimeToCall, input - inputStringArray, output - result
*/
const inputStringArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0]
  .split("");

const alphabetArray = Array.from(Array(26).keys())
  .map((character) => Number(character) + 65)
  .map((number) => String.fromCharCode(number));
const convertedNumberArray = inputStringArray.map((character) => {
  const index = alphabetArray.indexOf(character);
  if (index < 3) return 2;
  if (index < 6) return 3;
  if (index < 9) return 4;
  if (index < 12) return 5;
  if (index < 15) return 6;
  if (index < 19) return 7;
  if (index < 22) return 8;
  if (index < 26) return 9;
});

const result = convertedNumberArray.reduce(
  (time, number) => (time += number + 1),
  0
);
console.log(result);
