const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  if (num === 0) return DIGITS[0];

  let result = '';
  let currValue = num;

  while (currValue > 0) {
    let remainder = currValue % 10;

    result = DIGITS[remainder] + result;

    currValue = Math.floor((currValue - remainder) / 10);
  }

  return result;
}

function signedIntegerToString(num) {
  let sign = Math.sign(num);

  switch (sign) {
    case 1 :
      return ('+' + integerToString(num));
    case -1 :
      return ('-' + integerToString(num * -1));
    default :
      return integerToString(num);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));