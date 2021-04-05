let repeater = function (text) {
  return text.split('').map(letter => letter.concat(letter)).join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""