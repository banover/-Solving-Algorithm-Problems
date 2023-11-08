/*
문제: 30명의 학생 중에서(출석번호 1~30), 과제를 내지 않은 두 명의 학생의 출석번호 구하기
input: 과제 제출한 학생들의 출석번호가 한 줄에 하나씩 (number)
output: 출석번호가 작은 번호, 그다음 출석번호  (두 개의 number)
labeling: 함수 - getNoHomeworkStudentIdNumber, input - passStudentId, output - result;
*/

// node js version

const passStudentId = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const toTalStudentIdArray = Array.from(Array(30).keys(), (id) => id + 1);
let result = toTalStudentIdArray.filter((id) => !passStudentId.includes(id));
console.log(result.join(" "));
