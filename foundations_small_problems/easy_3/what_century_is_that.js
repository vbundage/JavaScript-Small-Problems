const centuryEnd = {
  0 : 'th',
  1 : 'st',
  2 : 'nd',
  3 : 'rd',
  4 : 'th',
  5 : 'th',
  6 : 'th',
  7 : 'th',
  8 : 'th',
  9 : 'th'
};

function century(yearNum) {
  let centuryNum = Math.ceil(yearNum / 100);

  if (centuryNum % 100 <= 13 && centuryNum % 100 >= 11) {
    return `${centuryNum}th`;
  } else {
    let lastDigit = centuryNum % 10;
    return `${centuryNum}${centuryEnd[lastDigit]}`;
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));          // "1st"
console.log(century(200));         // "2nd"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"