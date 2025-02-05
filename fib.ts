/**
 * 动态规划 解决 斐波那契递归问题
 */
function fib(n: number){
    const dp = new Array<number>()
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

console.log(fib(7));
