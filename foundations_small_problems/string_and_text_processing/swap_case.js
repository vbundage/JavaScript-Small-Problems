let swapCase = function(text) {
  return text.split('')
              .map(char => {
                if (/[a-z]/.test(char)) {
                  return char.toUpperCase();
                } else {
                  return char.toLowerCase();
                }
              })
              .join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"