function asciiValue(text) {
  let asciiSum = 0;

  text.split('').forEach((_, index) => asciiSum += text.charCodeAt(index));

  return asciiSum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
