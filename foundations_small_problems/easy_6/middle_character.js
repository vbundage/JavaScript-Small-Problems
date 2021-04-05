let centerOf = function(text) {
  let middleNum = Math.round(text.length / 2) - 1;

  if (text.length % 2 === 0) {
    return text.slice(middleNum, middleNum + 2);
  }

  return text[middleNum];
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
