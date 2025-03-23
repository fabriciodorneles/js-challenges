function maxCuts(N, x, y, z) {
  let dp = new Array(N + 1).fill(-1);
  dp[0] = 0; // Se o tamanho for 0, não precisamos cortar.
  console.log(N, x, y, z, "\n");
  console.log(dp);

  for (let i = 1; i <= N; i++) {
    console.log(
      i,
      dp,
      "\n",
      `dp[${i}]: `,
      dp[i],
      `dp[${i} - ${x}] + 1: `,
      dp[i - x] + 1,
      ` | dp[${i}]: `,
      dp[i],
      `dp[${i} - ${y}] + 1: `,
      dp[i - y] + 1,
      ` | dp[${i}]: `,
      dp[i],
      `dp[${i} - ${z}] + 1: `,
      dp[i - z] + 1,
      "\n"
    );
    if (i >= x && dp[i - x] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - x] + 1);
    }
    if (i >= y && dp[i - y] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - y] + 1);
    }
    if (i >= z && dp[i - z] !== -1) {
      dp[i] = Math.max(dp[i], dp[i - z] + 1);
    }

    console.log(`dp[${i}]F: `, dp, "\n");
  }

  return dp[N] === -1 ? -1 : dp[N];
}

// 🔥 Testando:
//console.log(maxCuts(5, 5, 3, 2)); // 2 ✅ Correto!
console.log(maxCuts(5, 5, 2, 2)); // 2 ✅ Correto!
//console.log(maxCuts(4, 2, 1, 1)); // 4 ✅
//console.log(maxCuts(7, 5, 3, 2)); // 3 ✅
//console.log(maxCuts(5, 3, 3, 3)); // 2 ✅ Correto!
