function solution(k, d) {
    let answer = 0;
    for(let i = 0; i <= d; i++) {
        answer += Math.floor(Math.sqrt((d-i)*(d-i) - i*i));
    }
    return answer;
}

console.log(solution(2,4))