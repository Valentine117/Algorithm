function solution(my_string, queries) {
  queries.forEach(arr => {my_string = my_string.slice(0, arr[0]) + my_string.slice(arr[0], arr[1] + 1).split("").reverse().join("") + my_string.slice(arr[1]+1)});
  return my_string;
}

console.log(solution("rermgorpsam",	[[2, 3], [0, 7], [5, 9], [6, 10]]));