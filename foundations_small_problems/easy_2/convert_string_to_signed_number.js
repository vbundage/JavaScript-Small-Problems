const DIGITS = {
  '0' : 0,
  '1' : 1,
  '2' : 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6,
  '7' : 7,
  '8' : 8,
  '9' : 9
};

function stringToSignedInteger(intStr) {
  let charArr = intStr.split('');
  let result = 0;
  let sign = 1;

  if (intStr.startsWith('-')) {
    sign *= -1;
    charArr.shift();
  } else if (intStr.startsWith('+')) {
    charArr.shift();
  }

  charArr.reverse().forEach((val, idx) => {
    result += DIGITS[val] * (10 ** idx);
  });

  return sign * result;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
