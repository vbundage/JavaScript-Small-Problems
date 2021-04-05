const Fraction = require('fraction.js');

let egyptian = function(rational) {
  let egyptianDenominators = [];
  let unitSum = new Fraction(0);
  let denominator = 1;

  while (Number(unitSum) !== Number(rational)) {
    if (Number(unitSum.add(1, denominator)) <= Number(rational)) {
      unitSum = unitSum.add(1, denominator);
      egyptianDenominators.push(denominator);
    }
    denominator += 1;
  }

  return egyptianDenominators;
};

let unegyptian = function(denominators) {
  return denominators
          .reduce((acc, denom) => acc + Fraction(1, denom), Fraction(0));
};

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
