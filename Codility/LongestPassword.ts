// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
  // Implement your solution here

  let inputNum: number = N;
  let list: number[] = [];
  let biggest: number = 0;

  while (inputNum !== 0) {
    let twoCnt: number = 0;
    let twoNum: number = 1;

    while (true) {
      if (twoNum * 2 > inputNum) {
        break;
      }
      twoCnt++;
      twoNum = twoNum * 2;
    }
    inputNum -= twoNum;
    list.push(twoCnt);
    if (list.length > 1) {
      biggest = Math.max(
        biggest,
        list[list.length - 2] - list[list.length - 1] - 1,
      );
    }
  }

  return biggest;
}
