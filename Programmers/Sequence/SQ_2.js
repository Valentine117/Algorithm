function solution(arr, queries) {
  return queries.map(query => {
      const answer = arr.slice(query[0],query[1]+1).filter(it => it > query[2]).sort((a,b) => a-b);
      return answer.length > 0 ? answer[0] : -1;
    }
  );
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]))