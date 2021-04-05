let substringsAtStart = function(text) {
  return text
          .split("")
          .map((_, idx) => text.slice(0, idx + 1));
};

let substrings = function(text) {
  let substrArr = [];

  for (let idx = 0; idx < text.length; idx++) {
    let substring = text.slice(idx);
    substrArr.push(...substringsAtStart(substring));
  }

  return substrArr;
}

console.log(substrings('abcde'));
