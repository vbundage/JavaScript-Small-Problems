function swap(words) {
  let wordArr = words.split(' ');
  // let swappedWords = [];

  // Further exploration with map
  wordArr = wordArr.map(word => swapFirstLastCharacters(word));

  // wordArr.forEach(word => {
  //   let letterSwap = swapFirstLastCharacters(word);
  //   swappedWords.push(letterSwap);
  // });

  return wordArr.join(' ');
}

function swapFirstLastCharacters(word) {
  let letterSwap = word;
  if (word.length > 1) {
    letterSwap = word.slice(-1) + word.slice(1, word.length - 1)
                + word.slice(0, 1);
  }
  return letterSwap;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
console.log(swap('cab')); // bac
console.log(swap('ba')); // ab