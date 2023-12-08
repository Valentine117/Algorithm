function recur(arr, n) {
  let newArr = arr.map(it => {
    if(it>=50 && it%2===0) return it/2;
    else if(it<50 && it%2!==0) return it*2 + 1;
    else return it;
  })

  if(arr.toString() === newArr.toString()) return n;
  return recur(newArr, n+1);
}

function solution(arr) {
  return recur(arr,0);
}

console.log(solution([1, 2, 3, 100, 99, 98], 5))