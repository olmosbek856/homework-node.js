function isPalindrome(x) {
  const str = x.toString();
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome(121));
