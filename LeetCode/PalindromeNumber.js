/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return x + '' === (x + '').split('').reverse().join('');
}
