function solution(wallpaper) {
  var answer = [];
  return answer;
}function solution(wallpaper) {
  const graph = wallpaper.map(it => it.split(""));

  const folderList = [];

  for (let x = 0; x< graph.length; x++) {
    for (let y = 0; y< graph[0].length; y++) {
      if(graph[x][y] === '#') folderList.push([x,y]);
    }
  }

  const XList = folderList.map(it => it[0]).sort((a,b) => a-b);
  const YList = folderList.map(it => it[1]).sort((a,b) => a-b);

  return [XList[0], YList[0], XList[XList.length-1]+1, YList[YList.length-1]+1];
}

console.log(solution([".#...", "..#..", "...#."]));