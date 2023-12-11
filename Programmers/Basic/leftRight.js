function solution(str_list) {
  const left = str_list.findIndex(it=>it==='l');
  const right = str_list.findIndex(it=>it==='r');

  if(left === -1 && right === -1) return [];
  if(left===-1) return str_list.slice(right+1);
  if(right === -1 || left < right) return str_list.slice(0,left);
  else return str_list.slice(right+1);
}

console.log(solution(["u", "u", "d", "r", "d"]))