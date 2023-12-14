function solution(park, routes) {
  const oldGraph = park.map(it => it.split(""));
  const start = [0,0];
  const graph = Array(oldGraph[0].length).fill(0).map(it => Array(oldGraph.length).fill(0));

  for (let i=0;i<oldGraph.length;i++) {
    for (let j =0;j<oldGraph[0].length;j++) {
      graph[j][i] = oldGraph[i][j];
    }
  }

  for (let i=0;i<graph.length;i++) {
    for (let j =0;j<graph[0].length;j++) {
      if(graph[i][j]==='S') {
        start[0] = i;
        start[1] = j;
        break;
      }
    }
  }

  routes.map(it=>it.split(" ")).forEach(it=>{
    switch (it[0]) {
      case 'S':
        for(let i=0;i<Number(it[1]);i++) {
          if(start[1]+i > graph[0].length || graph[start[0]][start[1]+i] === 'X') break;
        }
        start[1] += Number(it[1]);
        break;
      case 'N':
        for(let i=0;i<Number(it[1]);i++) {
          if(start[1]-i < 0 || graph[start[0]][start[1]-i] === 'X') break;
        }
        start[1] -= Number(it[1]);
        break;
      case 'E':
        for(let i=0;i<Number(it[1]);i++) {
          if(start[0]+i > graph.length || graph[start[0]+i][start[1]] === 'X') break;
        }
        start[0] += Number(it[1]);
        break;
      case 'W':
        for(let i=0;i<Number(it[1]);i++) {
          if(start[0]-i < 0 || graph[start[0]-i][start[1]] === 'X') break;
        }
        start[0] -= Number(it[1]);
        break;
    }
    console.log(start);
  });

  return start;
}

console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]));