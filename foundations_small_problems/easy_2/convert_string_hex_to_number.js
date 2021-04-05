const HEX_VALUES = {
  0 : 0,
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 5,
  6 : 6,
  7 : 7,
  8 : 8,
  9 : 9,
  A : 10,
  B : 11,
  C : 12,
  D : 13,
  E : 14,
  F : 15
};

function hexadecimalToInteger(hexStr) {
  let charArr = hexStr.split('');
  let result = 0;

  charArr.reverse().forEach((val, idx) => {
    result += HEX_VALUES[val.toUpperCase()] * (16 ** idx);
  });

  return result;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('E7A9') === 59305);
