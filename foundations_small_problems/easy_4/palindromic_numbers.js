function isPalindrome(text) {
  return text === text.split('').reverse().join('');
}

function isPalindromicNumber(num) {
  let strNum = String(num);
  while (strNum.startsWith('0')) strNum = strNum.slice(1);
  return isPalindrome(strNum);
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true