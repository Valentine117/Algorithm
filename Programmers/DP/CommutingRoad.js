function solution(m, n, puddles) {
  let dp = new Array(m).fill(1);
  dp = dp.map((el) => new Array(n).fill(1));

  for (let arr of puddles) {
    dp[arr[0] - 1][arr[1] - 1] = 0;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (dp[i][j] === 0) continue;
      if (i === 0) {
        dp[i][j] = dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[m - 1][n - 1];
}

console.log(solution(4, 3, [[2, 2]]));
