function solution(n, edge) {
  const visited = Array(n+1).fill(false);
  const distanceArr = Array(n+1).fill(0);

  const graph = Array(n+1).fill(0).map(it=> []);

  edge.forEach(val => {
    graph[val[0]].push(val[1]);
    graph[val[1]].push(val[0]);
  })

  console.log(graph)

  const bfsList = [1];

  while (bfsList.length > 0) {
    const index = bfsList.shift();
    visited[index] = true;
    graph[index].forEach(it => {
      if(!visited[it]) {
        bfsList.push(it);
        distanceArr[it] = distanceArr[index] + 1;
        visited[it] = true;
      }
    })
  }

  const maxNodeDistance = Math.max(...distanceArr);

  return distanceArr.filter(it => it === maxNodeDistance).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));