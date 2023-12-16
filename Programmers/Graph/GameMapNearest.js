let LeastDistance = Infinity;

function dfs(x, y, distance, maps, copyVisited) {
    if(x<0 || y<0 || x>maps.length-1 || y>maps[0].length-1 || copyVisited[x][y] || maps[x][y] === 0) return;
    copyVisited[x][y] = true;
    if(x===maps.length-1 && y===maps[0].length-1) {
        LeastDistance = Math.min(LeastDistance, distance);
        return;
    }
    dfs(x,y+1, distance+1, maps, [...copyVisited]);
    dfs(x+1,y, distance+1, maps, [...copyVisited]);
    dfs(x,y-1, distance+1, maps, [...copyVisited]);
    dfs(x-1,y, distance+1, maps, [...copyVisited]);
}

function solution(maps) {
    const visited = Array(maps.length).fill(0).map(_ => Array(maps[0].length).fill(false));
    dfs(0,0,1, maps, visited)
    return LeastDistance === Infinity ? -1 : LeastDistance;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));