/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //TODO
  return s.split('').reduce((acc, val, idx) => {
    if (idx + 1 < s.length)
      return dict[s.charAt(idx)] < dict[s.charAt(idx + 1)]
        ? acc - dict[val]
        : acc + dict[val];
    return acc + dict[val];
  }, 0);
};
