const [testCount, ...testCases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testcase = [];
for (let i = 1; i <= testCount; i++) {
  testcase.push(testCases.slice(3 * (i - 1), 3 * i));
}

class Language {
  constructor(json) {
    this.arr = JSON.parse(json);
  }

  reverse() {
    return this.arr.reverse();
  }

  delete() {
    return this.arr.length === 0 ? -1 : this.arr.shift();
  }
}

let answer = [];
testcase.forEach((tc) => {
  const command = tc[0].split("");

  const language = new Language(tc[2]);
  let error = false;
  command.forEach((com) => {
    switch (com) {
      case "D":
        const deletedItem = language.delete();
        if (deletedItem === -1) {
          error = true;
        }
        break;
      case "R":
        language.reverse();
        break;
    }
  });
  error ? answer.push("error") : answer.push(`[${language.arr}]`);
  error = false;
});

console.log(answer.join("\n"));

// const testCount = 4;
// const testCases = [
//   "RDD",
//   "4",
//   "[1,2,3,4]",
//   "DD",
//   "1",
//   "[42]",
//   "RRD",
//   "6",
//   "[1,1,2,3,5,8]",
//   "D",
//   "0",
//   "[]",
// ];

// 시간초과....
