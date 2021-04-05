let letterCaseCount = function(text) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  text.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      result.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  });

  return result;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }