/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  const arr = s.split('');
  let obj = {};
  let cur = 0;
  let max = 0;
  for (let c of arr) {
    if (obj[c]) {
      if (cur > max) max = cur;
      cur = 0;
      obj = {};
      obj[c] = 1;
    } else {
      obj[c] = 1;
    }
    cur++;
  }
  return Math.max(cur, max);
};

console.log(lengthOfLongestSubstring('dvdf'));
