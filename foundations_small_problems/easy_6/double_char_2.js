const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                    'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', 'z'];

let doubleConsonants = function (text) {
  return text.split('').map(letter => {
    if (CONSONANTS.includes(letter.toLowerCase())) return letter + letter;
    return letter;
  }).join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""