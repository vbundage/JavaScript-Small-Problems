"use strict";

class Luhn {
  constructor(string) {
    this.digits = string.replace(/ /g, '');
  }

  doubleEveryOtherDigit(digit, idx) {
    digit = Number(digit);
    if (idx % 2 === 1) {
      digit = digit * 2;
      if (digit > 9) digit = digit - 9;
    }
    return digit;
  }
  
  valid() {
    let sum;
    if (this.digits.length <= 1) {
      return false;
    } else {
      sum = this.digits.split('')
        .reverse()
        .map(this.doubleEveryOtherDigit)
        .reduce((acc, curr) => acc + curr);
    }

    return sum % 10 === 0;
  }
}

module.exports = Luhn;