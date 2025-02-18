function solution(triangle) {
  let answer = 0;
  let dpTriangle = structuredClone(triangle);

  for (let i = 0; i < triangle.length; i++) {
    let thisList = triangle[i];
    for (let j = 0; j < thisList.length; j++) {
      if (i === 0) continue;
      if (j === 0) {
        dpTriangle[i][j] = dpTriangle[i - 1][j] + dpTriangle[i][j];
      } else if (j === thisList.length - 1) {
        dpTriangle[i][j] = dpTriangle[i - 1][j - 1] + dpTriangle[i][j];
      } else {
        dpTriangle[i][j] =
          Math.max(dpTriangle[i - 1][j], dpTriangle[i - 1][j - 1]) +
          dpTriangle[i][j];
      }
    }
  }
  return Math.max(...dpTriangle[dpTriangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
