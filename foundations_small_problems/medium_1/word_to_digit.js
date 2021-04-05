const NUMBERED_WORDS = {
  zero : '0',
  one  : '1',
  two : '2',
  three : '3',
  four : '4',
  five : '5',
  six : '6',
  seven : '7',
  eight : '8',
  nine : '9'
};

let wordToDigit = function(string) {
  Object.keys(NUMBERED_WORDS).forEach(word => {
    let regex = RegExp(`\\b${word}\\b`, 'gi');
    string = string.replace(regex, NUMBERED_WORDS[word]);
  });
  return string;
};


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.'));
