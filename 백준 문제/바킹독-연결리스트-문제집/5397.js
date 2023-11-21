const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 참고 코드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const L = Number(input[0]);

// for(let i=1; i<L+1; i++){
//     let text = input[i].split('');
//     let front = [];
//     let back = [];

//     for(let j=0; j<text.length; j++){
//         switch(text[j]){
//             case '<':
//                 if(front.length>0) back.push(front.pop());
//                 break;
//             case '>':
//                 if(back.length>0) front.push(back.pop());
//                 break;
//             case '-':
//                 if(front.length>0) front.pop();
//                 break;
//             default:
//                 front.push(text[j]);
//                 break;
//         }
//     }

//     console.log(front.join('')+back.reverse().join(''));
// }
