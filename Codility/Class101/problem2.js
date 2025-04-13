function solutionMathOptimized(S) {
  const N = S.length;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += parseInt(S[i]);
  }
  const r = sum % 3;

  let count = 0;
  for (let i = 0; i < N; i++) {
    const d = parseInt(S[i]);
    for (let k = 0; k <= 9; k++) {
      if (k === d) continue;
      if ((sum - d + k) % 3 === 0) {
        count++;
      }
    }
  }

  return count;
}
