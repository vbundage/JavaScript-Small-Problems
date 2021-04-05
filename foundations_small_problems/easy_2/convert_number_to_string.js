const NUM_STRING = {
  0 : '0',
  1 : '1',
  2 : '2',
  3 : '3',
  4 : '4',
  5 : '5',
  6 : '6',
  7 : '7',
  8 : '8',
  9 : '9'
};

function integerToString(num) {
  if (num <= 9) return NUM_STRING[num];

  let result = '';

  let currValue = num;
  let pow = 1;
  while (pow >= 0) {
    let tenToThePow = 10 ** pow;

    if (Math.floor(currValue / tenToThePow) > 9) {
      pow += 1;
    } else if (Math.floor(currValue / tenToThePow) <= 9) {
      let temp = Math.floor(currValue / tenToThePow);

      result = result.concat(NUM_STRING[temp]);
      currValue -= temp * tenToThePow;
      pow -= 1;
    }
  }

  return result;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(10));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"