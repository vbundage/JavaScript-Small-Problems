function crunch(text) {
  let collapsedStr = '';
  let currChar = text[0];

  for (let pos = 1; pos <= text.length; pos++) {
    if (currChar === text[pos]) {
      continue;
    } else {
      collapsedStr += currChar;
      currChar = text[pos];
    }
  }

 return collapsedStr;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
