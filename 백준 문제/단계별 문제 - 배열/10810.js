/* 
문제 : 바구니 수와 공을 넣을 개수가 주어질 때, 공을 다 넣은 후 모든 바구니에 들어있는 공의 숫자를 출력
input: 바구니 개수, 공 넣을 횟수, 공 넣을 바구니 범위, 넣을 공의 숫자
output: 모든 바구니 속에 들어있는 공의 숫자 나열
labeling: 함수 - getNumberInAllBag, input - numberOfBags, theNumberOfPassingBall, firstRangeBag, lastRangeBag, numberOfBall, output - result;
*/

const { start } = require("repl");

function getNumberInAllBag() {
  // numberOfBags,
  // theNumberOfPassingBall,
  // firstRangeBag,
  // lastRangeBag,
  // numberOfBall,
  // ballAndBagDataSet
  let result = {};
  const numberOfBags = 5;
  const theNumberOfPassingBall = 4;
  const ballAndBagDataSet = [
    [1, 2, 4],
    [3, 4, 4],
    [1, 4, 1],
    [2, 2, 2],
  ];

  let startBag = 100;
  let endBag = 0;

  ballAndBagDataSet.map((ballAndBagData) => {
    const firstRangeBag = Number(ballAndBagData.at(0));
    const lastRangeBag = Number(ballAndBagData.at(1));
    startBag = startBag > firstRangeBag ? firstRangeBag : startBag;
    endBag = endBag < lastRangeBag ? lastRangeBag : startBag;
    const passingBallNumber = Number(ballAndBagData.at(2));
    const numberOfrepeat = lastRangeBag - firstRangeBag + 1;

    for (
      let bagName = firstRangeBag;
      bagName < numberOfrepeat + firstRangeBag;
      bagName++
    ) {
      const objectBagName = bagName.toString();
      result[objectBagName] = passingBallNumber;
    }
  });

  let answer = "";
  for (let i = startBag; i < startBag + numberOfBags; i++) {
    const property = i.toString();
    if (i === startBag + numberOfBags - 1) {
      answer = answer + `${result[property] ? result[property] : 0}`;
      break;
    }
    if (result[property] === undefined) {
      answer = answer + "0" + " ";
    } else {
      answer = answer + `${result[property]}` + " ";
    }
  }
  console.log(result);
  console.log(answer);
}

// nodejs version

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [firstAndSecondInput, ...restInput] = input;
const numberOfBags = Number(firstAndSecondInput[0]);
const theNumberOfPassingBall = Number(firstAndSecondInput[2]);
const ballAndBagDataSet = restInput.map((numberSet) => {
  return [numberSet[0], numberSet[2], numberSet[4]];
});

let result = {};
let startBag = 100;
let endBag = 0;

ballAndBagDataSet.map((ballAndBagData) => {
  const firstRangeBag = Number(ballAndBagData.at(0));
  const lastRangeBag = Number(ballAndBagData.at(1));
  startBag = startBag > firstRangeBag ? firstRangeBag : startBag;
  endBag = endBag < lastRangeBag ? lastRangeBag : endBag;
  const passingBallNumber = Number(ballAndBagData.at(2));
  const numberOfrepeat = lastRangeBag - firstRangeBag + 1;

  for (
    let bagName = firstRangeBag;
    bagName < numberOfrepeat + firstRangeBag;
    bagName++
  ) {
    let objectBagName = bagName.toString();
    result[objectBagName] = passingBallNumber;
  }
});

let answer = "";
for (let i = startBag; i < startBag + numberOfBags; i++) {
  let property = i.toString();
  if (i === startBag + numberOfBags - 1) {
    answer = answer + `${result[property] ? result[property] : 0}`;
    break;
  }
  if (result[property] === undefined) {
    answer = answer + "0" + " ";
  } else {
    answer = answer + `${result[property]}` + " ";
  }
}

console.log(answer);

// 정답 코드(참고)

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, M] = input[0].split(" ").map(el => +el);

// let arr = new Array(N);

// for(let i = 1; i <= M; i++ ){
//    let [start,end,k] = input[i].split(" ").map(el => +el);
//     for(start; start <= end; start++){
//         arr[start-1] = k;
//     }
// }

// for(let j=0; j<arr.length; j++){
//     typeof arr[j] === "undefined" ? arr[j] = 0 : arr[j]
// }

// console.log(arr.join(" "));
