let removeUnusedBlock = function(letter, blocks) {
  if (blocks.find(block => block.includes(letter))) {
    return blocks.splice(blocks.findIndex(block => block.includes(letter)), 1);
  }
  return undefined;
};

let isBlockWord = function(word) {
  let blocks = ['BObo', 'XKxk', 'DQdq', 'CPcp', 'NAna', 'GTgt', 'REre', 'FSfs',
                'JWjw', 'HUhu', 'VIvi', 'LYly', 'ZMzm'];
  let letterArr = word.split('');

  for (let pos = 0; pos < letterArr.length; pos += 1) {
    if (removeUnusedBlock(letterArr[pos], blocks)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
