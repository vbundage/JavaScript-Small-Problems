function compareByLength(str1, str2) {
  let lengths = [str1.length, str2.length];

  if (lengths[0] < lengths[1]) {
    return -1;
  } else if (lengths[0] > lengths[1]) {
    return 1;
  }
  return 0;
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0