/*
문제: 시험 점수 중 최고점수 M을 골라서, 시험점수의 평균을 점수/M * 100 공식을 활용해서 구하라
input: 시험과목 갯수(number), 성적(number)
output: 새로운 평균 점수(float)
laveling: 함수 - getNewaverageTestScore, input - numberOfSubject, scoreArray, output - result
*/
// const input = ["3", "40 80 60"];

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberOfSubject = Number(input[0]);
const scoreArray = input[1].split(" ").map((score) => Number(score));
const maxScore = Math.max(...scoreArray);

const manipulatedScore = scoreArray.map((score) => (score / maxScore) * 100);

const sumOfTestScores = manipulatedScore.reduce((totalSum, score) => {
  return (totalSum += score);
}, 0);

const result = sumOfTestScores / scoreArray.length;
console.log(result);
