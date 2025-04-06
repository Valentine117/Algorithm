function solution(capacity, routes) {
  let list = [];

  for (let route of routes) {
    list.push([route[1], route[0]]);
    list.push([route[2], route[0] * -1]);
  }

  list.sort((arr1, arr2) =>
    arr1[0] - arr2[0] === 0 ? arr1[1] - arr2[1] : arr1[0] - arr2[0],
  );

  let amount = 0;

  for (let arr of list) {
    amount += arr[1];
    if (amount > capacity) return false;
  }

  return true;
}

console.log(
  solution(9, [
    [3, 2, 6],
    [5, 1, 4],
    [1, 7, 13],
  ]),
);
