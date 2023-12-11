function solution(rank, attendance) {
  return Math.floor(
    rank
      .map((val,idx) => [val,idx])
      .filter((val, idx) => attendance[idx])
      .sort((a,b)=>a[0]-b[0])
      .reduce((acc, val, idx) => acc + val[1]*Math.pow(100, 2-idx), 0));
}

console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]))