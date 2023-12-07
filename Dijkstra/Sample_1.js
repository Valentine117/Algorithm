class Node {
  constructor(index, distance) {
    this.index = index;
    this.distance = distance;
  }

  getIndex() {
    return this.index;
  }

  getDistance() {
    return this.distance;
  }
}

const INF = 1e9;
let n, m, start;
const graph = [];
let visited = new Array(100001).fill(false);
let d = new Array(100001).fill(INF);

function getSmallestNode() {
  let minValue = INF;
  let index = 0;
  for (let i = 1; i <= n; i++) {
    if (d[i] < minValue && !visited[i]) {
      minValue = d[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(start) {
  d[start] = 0;
  visited[start] = true;
  for (let j = 0; j < graph[start].length; j++) {
    d[graph[start][j].getIndex()] = graph[start][j].getDistance();
  }
  for (let i = 0; i < n - 1; i++) {
    const now = getSmallestNode();
    visited[now] = true;
    for (let j = 0; j < graph[now].length; j++) {
      const cost = d[now] + graph[now][j].getDistance();
      if (cost < d[graph[now][j].getIndex()]) {
        d[graph[now][j].getIndex()] = cost;
      }
    }
  }
}