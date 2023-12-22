function solution(k, d) {
    let answer = 0;
    for(let i = 0; i <= d; i+=k) {
        answer += Math.floor(Math.floor(Math.sqrt(Math.abs(d*d - i*i)))/k)+1;
    }
    return answer;
}

console.log(solution(2,4))