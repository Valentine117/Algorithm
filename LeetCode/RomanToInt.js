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

  if (true) {
  }

  return s.split('').reduce((acc, val) => acc + dict[val], 0);
};