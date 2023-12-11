function solution(arr) {
  const width = arr[0].length;
  const height = arr.length;
  if (width===height) return arr;
  if(width > height) return [ ...arr, ...Array(width-height).fill("0".repeat(width).split('').map(it => Number(it)))];
  return arr.map(it=> [...it, ..."0".repeat(height - width).split('').map(it=>Number(it))]);
}

console.log(solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]));