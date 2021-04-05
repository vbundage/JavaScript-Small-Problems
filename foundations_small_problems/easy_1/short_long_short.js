function shortLongShort(str1, str2) {
  let result = "";
  if (str1.length < str2.length) {
    result = result.concat(str1, str2, str1);
  } else {
    result = result.concat(str2, str1, str2);
  }
  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"