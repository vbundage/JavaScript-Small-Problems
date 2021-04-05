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

let caesarEncrypt = function(text, key) {
  let charArr = text.split('');

  return charArr.map(char => {
            if (RegExp(/[^a-z]/gi).test(char)) {
              return char;
            }
            return shiftCase(char, key);
          }).join('');
};

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
