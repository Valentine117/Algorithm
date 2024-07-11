function solution(sizes) {
  return (
    Math.max(...sizes.map((it) => Math.max(...it))) *
    Math.max(...sizes.map((it) => Math.min(...it)))
  );
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
