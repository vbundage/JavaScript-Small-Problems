function isBlank(text) {
  removedSpaces = text.trim();
  return !removedSpaces ? true : false;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
