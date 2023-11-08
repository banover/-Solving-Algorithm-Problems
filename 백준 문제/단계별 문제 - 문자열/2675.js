/*
문제: 문자열 1개가 있을 때, 각 문자를 r번 반복해 새로 만든 문자열을 출력하기
input : 출력할 문자열 갯수(number), 문자반복횟수(number), 문자열(string) 
output : 각 문자를 반복해 만든 새로운 문자열(string)
labeling : 함수 - getNewRuleAdaptedString, input - numberOfprintedString, repeatNumber, originalString, output - result
*/
// const input = ["2", "3 ABC", "5 /HTP"];
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberOfprintedString = input[0];

let result = "";
for (let i = 1; i < input.length; i++) {
  const [repeatNumber, originalString] = input[i].split(" ");
  result = originalString.split("").map((character) => {
    let newCharacter = "";
    for (let i = 0; i < Number(repeatNumber); i++) {
      newCharacter += character;
    }
    return newCharacter;
  });

  console.log(result.join(""));
}
