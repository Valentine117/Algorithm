function solution(a, b, c, d) {
  const keyValues = {};
  [a,b,c,d].forEach(it=>{keyValues[it] ? keyValues[it].stack++ : keyValues[it] = { stack: 1, number: it }});

  const stackNumber = {};

  Object.values(keyValues).forEach(it=>{ stackNumber[it.stack] = it.number });

  const keys = Object.keys(stackNumber);
  const values = Object.values(keyValues).sort((a,b) => b.stack-a.stack);

  if(keys.includes('4')) return 1111*a;
  if(keys.includes('3')) return Math.pow(10*stackNumber['3'] + stackNumber['1'],2);
  if(keys.includes('2')) {
    if(values.length===2) return (values[0].number + values[1].number) * Math.abs(values[0].number - values[1].number);
    return values[1].number * values[2].number
  }

  return [a,b,c,d].sort((a,b)=>a-b)[0];
}

console.log(solution(2,2,1,4))