function solution(score) {
  let answer = 0;

  let rainbowJelly = 100;
  let starJelly = 50;
  let yellowJelly = 5;
  let normalJelly = 1;

  let remain = score;

  while (remain > 0) {
    let thisScore;
    if (remain >= rainbowJelly) {
      thisScore = rainbowJelly;
    } else if (remain >= starJelly) {
      thisScore = starJelly;
    } else if (remain >= yellowJelly) {
      thisScore = yellowJelly;
    } else {
      thisScore = normalJelly;
    }

    remain -= thisScore;
    answer++;
  }

  return answer;
}

console.log(solution(156));
