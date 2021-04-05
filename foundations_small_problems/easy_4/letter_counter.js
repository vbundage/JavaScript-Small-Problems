function wordSizes(words) {
  if (words.length === 0) return {};

  words = words.replace(/[^a-z\s]+/gi, '');

  let sizesCount = {};

  words.split(' ').forEach(word => {
    if (!sizesCount.hasOwnProperty(word.length)) {
      sizesCount[word.length] = 1;
    } else {
      sizesCount[word.length] += 1;
    }
  });

  return sizesCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}