function solution(name) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  const alphaMap = {};

  alphabets.forEach((val,idx) => {
    alphaMap[val] = Math.min(idx, 26-idx);
  });

  const nameSplit = name.split("");

  const words = nameSplit.reduce((acc, val) => acc + alphaMap[val],0);

  let maxALenght = 0;
  let cnt = 0;

  nameSplit.forEach(it=>{
    if(it === 'A') {
      const old = maxALenght;
      maxALenght = Math.max(maxALenght, ++cnt);
    } else {
      cnt = 0;
    }
  })

  const As = 'A'.repeat(maxALenght);
  const firstMaxAAt = name.indexOf(As);
  const lastMaxAAt = firstMaxAAt + maxALenght - 1;
  const leftOver = name.length - lastMaxAAt -1;

  let walk = 0;

  if(maxALenght===0) walk = name.length - 1;
  else if(maxALenght === name.length) walk = 0;
  else if(firstMaxAAt === 0) walk = leftOver;
  else if (lastMaxAAt === name.length-1) walk = name.length - maxALenght - 1;
  else walk = Math.min(firstMaxAAt-1 + firstMaxAAt-1 + leftOver, name.length-1);

  return words + walk;
}

console.log(solution("BBAAAAB"))
console.log(solution("BBBABBB"))
console.log(solution("JEROEN"));
