function solution(picture, k) {
  return picture.map(str => {
    str = str.split("").map(it => it.repeat(k)).join("");
    const list = [];
    for(let i = 0; i<k; i++) list.push(str);
    return list;
  }).join(",").split(",");
}

console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."], 2));