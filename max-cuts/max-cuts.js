function maxCuts(N, x, y, z) {
  let dp = new Array(N + 1).fill(-1);
  dp[0] = 0; // Nenhum corte necessário para comprimento 0.

  for (let i = 1; i <= N; i++) {
    if (i >= x && dp[i - x] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - x] + 1);
    }
    if (i >= y && dp[i - y] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - y] + 1);
    }
    if (i >= z && dp[i - z] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - z] + 1);
    }
  }

  return dp[N] === -1 ? -1 : dp[N];
}

// 🔥 Testando:
console.log(maxCuts(5, 5, 2, 2)); // ✅ 3 (Cortes: 2, 2, 1)
console.log(maxCuts(7, 5, 3, 2)); // ✅ 3 (Cortes: 3, 2, 2)
console.log(maxCuts(4, 2, 1, 1)); // ✅ 4 (Cortes: 1, 1, 1, 1)
