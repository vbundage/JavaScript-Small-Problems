// for (let counter = 1; counter <= 99; counter++) {
//   if (counter % 2 !== 0) console.log(counter);
// }

const readline = require('readline-sync');

console.log("What would you like the upper limit to be?");
let limit = Number(readline.question());
let arrNumbers = [];

for (let counter = 1; counter <= limit; counter += 2) {
  arrNumbers.push(counter);
}

arrNumbers.forEach(num => console.log(num));