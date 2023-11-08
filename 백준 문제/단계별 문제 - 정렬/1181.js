/*
문제: 소문자 알파벳으로 구성된 N개의 단어가 있을 때, 길이가 짧은 것부터 정렬하는데 길이가 같으면 사전순으로 정렬하기 
input : 단어의 개수, 단어배열
output : 정렬된 단어들 
labeling : 함수 - printSortedWords, input - numberOfWords, wordsArray, output - result

*/
let wordsArray = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// let wordsArray = [
//   13,
//   "but",
//   "i",
//   "wont",
//   "hesitate",
//   "no",
//   "more",
//   "no",
//   "more",
//   "it",
//   "cannot",
//   "wait",
//   "im",
//   "yours",
// ];
wordsArray.shift();
wordsArray = new Set(wordsArray);
wordsArray = [...wordsArray];
wordsArray.sort();

wordsArray.sort((a, b) => {
  return a.length - b.length;
});

const result = wordsArray.join("\n");
console.log(result);
