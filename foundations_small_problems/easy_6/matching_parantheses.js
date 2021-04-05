let isBalanced = function(text, leftChar = '(', rightChar = ')') {
  let parens = 0;

  for (let index = 0; index < text.length; index++) {
    if (text[index] === leftChar) {
      parens += 1;
    } else if (text[index] === rightChar) {
      parens -= 1;
    }
    if (parens < 0) return false;
  }

  return parens === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced('{Hi}', '{', '}'));