function isPalindrome(x) {
  return x + '' === (x + '').split('').reverse().join('');
}
