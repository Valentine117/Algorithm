function solution(arr, queries) {
  for (const query of queries) {
    arr = arr.map((val, idx) => {
      if (idx >= query[0] && idx <= query[1] && (idx%query[2] === 0 || idx === 0)) return val + 1;
      return val;
    })
  }
  return arr;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]]))