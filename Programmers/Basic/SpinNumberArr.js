function solution(n) {
    let answer = Array(n).fill(0).map(it => Array(n).fill(0));
    let cnt = 1;

    if(n%2!==0) answer[(n-1)/2][(n-1)/2] = n*n;

    for(let i = 0; i<n; i++) {
        for(let j = i; j<n-i-1;j++) {
            answer[i][j] = cnt++;
        }
        for(let j = i; j<n-i-1;j++) {
            answer[j][n-1-i] = cnt++;
        }
        for(let j = i; j<n-i-1;j++) {
            answer[n-1-i][n-1-j] = cnt++;
        }
        for(let j = i; j<n-i-1;j++) {
            answer[n-1-j][i] = cnt++;
        }
    }
    return answer;
}

console.log(solution(5));