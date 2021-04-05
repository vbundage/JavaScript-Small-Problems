function stringy(num) {
  let result = "";

  for (let count = 0; count < num; count++) {
    result += result.endsWith("1") ? "0" : "1";
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(0));    // ""
console.log(stringy(1));    // "1"
console.log(stringy(2));    // "10"