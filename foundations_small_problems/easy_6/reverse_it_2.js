let reverseWords = function(text) {
  let reversedTextArray = text.split(' ').map(word => {
    if (word.length >= 5) {
      return word
              .split('')
              .reverse()
              .join('');
    }
    return word;
  });

  return reversedTextArray.join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"