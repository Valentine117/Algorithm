let answer = [];

function dfs(current, remainGraphs, pins, history, tickets) {
  if(history.length === tickets.length + 1) {
    answer.push(history);
    return;
  }
  if (remainGraphs[current].every(it => it === 0)) return;

  for(let i = 0; i < remainGraphs[current].length; i++) {
    const copyRemainGraphs = JSON.parse(JSON.stringify(remainGraphs));
    const copyHistory = [...history];
    if(copyRemainGraphs[current][i] === 0) continue;
    copyRemainGraphs[current][i] -= 1;
    copyHistory.push(pins[i]);
    dfs(i, copyRemainGraphs, pins, copyHistory, tickets);
  }
}

function solution(tickets) {
  const pins = ["ICN"];
  tickets.forEach(it => {
    if(!pins.includes(it[0])) pins.push(it[0]);
    if(!pins.includes(it[1])) pins.push(it[1]);
  });
  const pinsIndexesMap = {};
  pins.forEach((val, idx)=>{pinsIndexesMap[val] = idx});

  const graph = Array(pins.length).fill(0).map(_=>Array(pins.length).fill(0));

  tickets.forEach(it => {
    graph[pinsIndexesMap[it[0]]][pinsIndexesMap[it[1]]] += 1;
  });

  dfs(0, graph, pins, ["ICN"], tickets);

  return answer.sort()[0];
}

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))