
var visited = Array(20001).fill(false);
var distanceArr = Array(20001).fill(-1);
function search(node, distance, graph) {
  if(visited[node]) return;
  visited[node] = true;
  distanceArr[node] = distance;
  console.log(graph)
  for(const i of graph[node]) {
    console.log(i);
    search(i, distance + 1, [...graph]);
  }
}

function solution(n, edge) {
  let graph = Array(n+1).fill(1).map(it => []);
  visited = visited.slice(0,n+1);
  distanceArr = distanceArr.slice(0, n+1);

  for (const arr of edge) {
    graph[arr[0]].push(arr[1]);
    graph[arr[1]].push(arr[0]);
  }

  graph = graph.map(it => it.sort((a,b)=>a-b));

  console.log(graph);

  search(1,0,graph);

  return distanceArr;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	));