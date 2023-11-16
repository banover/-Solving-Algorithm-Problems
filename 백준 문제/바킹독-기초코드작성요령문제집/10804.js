const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((range) => range.split(" ").map(Number));

const result = [];
for (let i = 1; i <= 20; i++) {
  result.push(i);
}

input.map((range) => {
  const from = range[0];
  const to = range[1];

  if (from === to) {
    return range;
  }

  const numberOfReverse = to - from + 1;
  const reverseArray = [];
  for (let i = to; i >= from; i--) {
    reverseArray.push(result[i - 1]);
  }
  result.splice(from - 1, numberOfReverse, ...reverseArray);
});

console.log(result.join(" "));

// const input = [
//     [5, 10],
//     [9, 13],
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [1, 20],
//     [1, 20],
//   ];
