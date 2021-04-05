const MAX_FEATURED = 9876543201;

let nextDivisibleBySevenAndOdd = function(num) {
  do {
    num += 1;
  } while (!((num % 7 === 0) && (num % 2 === 1)));

  return num;
};

let isAllUniqueDigits = function(digits) {
  let strDigits = String(digits);
  let numSet = new Set(strDigits);

  return strDigits.length === numSet.size;
};


let featured = function(num) {
  let featuredNum = nextDivisibleBySevenAndOdd(num);

  do {
    if (isAllUniqueDigits(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return "There is no possible number that fulfills those requirements.";
};

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543200));
console.log(featured(9876543201));