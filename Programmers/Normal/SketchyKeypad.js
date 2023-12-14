function solution(keymap, targets) {
  var answer = [];

  const map = {};
  keymap.forEach(it => {
    it.split("").forEach((val, idx) => {
      if(!map[val]) {
      map[val] = idx + 1;
    } else if (map[val] > idx + 1) map[val] = idx + 1;})
  });

  console.log(map)

  return targets.map(it=> it.split('').reduce((acc, val) => acc + map[val], 0) ?? null);
}

console.log(solution(["ABACD", "BCEFD"],	["ABCD","AABB"]))