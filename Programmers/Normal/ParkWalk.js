function solution(park, routes) {
  const graph = park.map(it => it.split(""));
  const start = [0,0];

  for (let i=0;i<graph.length;i++) {
    for (let j =0;j<graph[0].length;j++) {
      if(graph[i][j]==='S') {
        start[0] = i;
        start[1] = j;
        break;
      }
    }
  }


  console.log(graph)

  console.log(start)

  routes.map(it=>it.split(" ")).forEach(it=>{
    console.log(it)
    switch (it[0]) {
      case 'E':
        let outE = false;
        for(let i=1;i<=Number(it[1]);i++) {
          if(start[1]+i > graph[0].length-1 || graph[start[0]][start[1]+i] === 'X') {
            outE = true;
            break;
          }
        }
        if(outE) break
        start[1] += Number(it[1]);
        break;
      case 'W':
        let outW = false;
        for(let i=1;i<=Number(it[1]);i++) {
          if(start[1]-i < 0 || graph[start[0]][start[1]-i] === 'X') {
            outW = true
            break;
          }
        }
        if(outW) break;
        start[1] -= Number(it[1]);
        break;
      case 'S':
        let outS = false;
        for(let i=1;i<=Number(it[1]);i++) {
          if(start[0]+i > graph[0].length-1 || graph[start[0]+i][start[1]] === 'X') {
            outS = true;
            break;
          }
        }
        if(outS) break;
        start[0] += Number(it[1]);
        break;
      case 'N':
        let outN = false;
        for(let i=1;i<=Number(it[1]);i++) {
          if(start[0]-i < 0 || graph[start[0]-i][start[1]] === 'X') {
            outN = true;
            break;
          }
        }
        if(outN) break;
        start[0] -= Number(it[1]);
        break;
    }
    console.log(start);
  });

  return start;
}

console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]));