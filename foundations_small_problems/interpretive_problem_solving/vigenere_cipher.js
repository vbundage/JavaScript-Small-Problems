const ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

let shiftCase = function(char, key) {
  if (char === char.toUpperCase()) {
    return ALPHABET[(ALPHABET
            .findIndex(letter => letter === char.toLowerCase()) + key) % ALPHABET.length]
            .toUpperCase();
  }
  return ALPHABET[(ALPHABET
          .findIndex(letter => letter === char) + key) % ALPHABET.length];
};

let vigenereEncrypt = function(text, keyword) {
  let charArr = text.split('');
  let keyPos = 0;

  return charArr.map(char => {
          let key = ALPHABET.findIndex(letter => letter === keyword[keyPos].toLowerCase());
            if (RegExp(/[^a-z]/gi).test(char)) {
              return char;
            }
            keyPos = (keyPos + 1) % keyword.length;
            return shiftCase(char, key);
          }).join('');
};
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'A'));
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'Aa'));
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'cab'));
console.log(vigenereEncrypt('Dog', 'Rabbit'));
