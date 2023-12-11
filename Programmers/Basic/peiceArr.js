function solution(arr, query) {
  query.forEach((val,idx) => { arr = idx%2===0 ? arr.slice(0, val+1) : arr.slice(val) });
  return arr;
}

//짝 뒤 홀 앞
console.log(solution([0, 1, 2, 3, 4, 5],[4, 1, 2]))