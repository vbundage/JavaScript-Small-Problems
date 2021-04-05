let reverseSentence = function(text) {
  return text.split(' ').reverse().join(' ');
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"