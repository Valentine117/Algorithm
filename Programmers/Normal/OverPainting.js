function solution(n, m, section) {
  const wall = Array(n+1).fill(true);
  let answer = 0;
  section.forEach(it => { wall[it] = false });
  section.forEach(it => {
    if(wall[it]) return;
    answer++;
    for(let i = it; i<it+m; i++) {
      if(i>wall.length) break;
      wall[i] = true;
    }
  })
  return answer;
}

console.log(solution(8,4,[2, 3, 6]))