let numInnerSpaces = function(size, count) {
  return ((size - 3) / 2) - count;
};

let numOuterSpaces = function(size, count) {
  return count;
}

let spacedAsterisks = function(size, count) {
  let spacesBetween = numInnerSpaces(size, count);
  let spacesPadding = numOuterSpaces(size, count);
  return ' '.repeat(spacesPadding) + ['*', '*', '*'].join(' '.repeat(spacesBetween));
};

let star = function(size) {
  let middleIdx = Math.floor(size / 2);
  let increment = 1;

  for (let count = 0; count < middleIdx; count += 1) {
    console.log(spacedAsterisks(size, count));
  }

  console.log('*'.repeat(size));

  for (let count = middleIdx - 1; count >= 0; count -= 1) {
    console.log(spacedAsterisks(size, count));
  }
};

star(7);
star(9);
