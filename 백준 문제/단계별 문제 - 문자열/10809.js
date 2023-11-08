/*
문제: 알파벳 소문자로 이루어진 단어 1개가 주어질 때, 알파벳 종류별로 해당 단어에 포함되는 알파벳이면 단어에 포함된 위치를, 아니면 -1 출력하기
input : word(string)
output : 공백으로 띄어진 string
labeling : 함수 - printAlpabetPosition, input - inputWord, output - result
*/
const inputWord = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[0];

const alpabetNumberArray = Array.from(Array(26).keys()).map(
  (number) => +number + 97
);
const alpabetArray = alpabetNumberArray.map((number) =>
  String.fromCharCode(number)
);

const result = Array.from(Array(26).keys()).map((number) => 0);
alpabetArray.map((character, index) => {
  return (result[index] = inputWord.indexOf(character));
});

console.log(result.join(" "));
// let result = inputWord.map((character) => {
//   const alpabetPosition = character.charCodeAt(0) - 97;
// });

// inputValue.charCodeAt(0);
