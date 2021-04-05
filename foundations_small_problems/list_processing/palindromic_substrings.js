let substringsAtStart = function(text) {
  return text
          .split("")
          .map((_, idx) => text.slice(0, idx + 1));
};

let substrings = function(text) {
  let substrArr = [];

  for (let idx = 0; idx < text.length; idx++) {
    let substring = text.slice(idx);
    substrArr.push(...substringsAtStart(substring));
  }

  return substrArr;
};

let isPalindrome = function(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
};

let palindromes = function(text) {
  return substrings(text).filter(isPalindrome);
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]