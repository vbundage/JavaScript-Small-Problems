let substringsAtStart = function(text) {
  return text
          .split("")
          .map((_, idx) => text.slice(0, idx + 1));
};

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
