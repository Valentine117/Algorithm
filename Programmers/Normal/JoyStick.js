function solution(name) {
  const nameSplit = name.split("");
  const graph = Array(name.length).fill(0).map(_=>Array(name.length).fill(0));

  for(let i in nameSplit) {
    if(nameSplit[i] === 'A') continue;
    // graph[i] = graph[i].map((val,idx)=> )
  }
  return 0;
}

console.log(solution("BBAAAAB"))
console.log(solution("BBBABBB"))
console.log(solution("JEROEN"));

list.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(list);