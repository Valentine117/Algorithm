function solution(maps) {
    const visited = Array(maps.length).fill(0).map(_ => Array(maps[0].length).fill(false));
    const distanceArr = Array(maps.length).fill(0).map(_ => Array(maps[0].length).fill(0));
    distanceArr[0][0] = 1;
    const list = [[0,0]];

    while (list.length > 0) {
        const head = list.shift();
        const x = head[0];
        const y = head[1];

        if(x === maps.length-1 && y === maps[0].length-1) return distanceArr[x][y];

        visited[x][y] = true;

        if(x + 1 < maps.length && maps[x+1][y] !== 0 && !visited[x+1][y]) {
            distanceArr[x+1][y] = distanceArr[x][y] + 1;
            list.push([x+1, y]);
            maps[x+1][y] = 0;
        }
        if(y + 1 < maps[0].length && maps[x][y+1] !== 0 && !visited[x][y+1]) {
            distanceArr[x][y+1] = distanceArr[x][y] + 1;
            list.push([x, y+1]);
            maps[x][y+1] = 0;
        }
        if(x - 1 >= 0 && maps[x-1][y] !== 0 && !visited[x-1][y]) {
            distanceArr[x-1][y] = distanceArr[x][y] + 1;
            list.push([x-1, y]);
            maps[x-1][y] = 0;
        }
        if(y - 1 >= 0 && maps[x][y-1] !== 0 && !visited[x][y-1]) {
            distanceArr[x][y-1] = distanceArr[x][y] + 1;
            list.push([x, y-1]);
            maps[x][y-1] = 0;
        }
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));