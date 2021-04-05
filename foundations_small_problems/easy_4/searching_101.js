const readline = require('readline-sync');
const numEnd = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

function getUserInput() {
  let numsList = [];

  for (let counter = 0; counter < 6; counter++) {
    numsList.push(readline.question(`Enter the ${numEnd[counter]} number: `));
  }

  searchNum(numsList);
}

function searchNum(numsList) {
  let lastNum = numsList.pop();

  if (numsList.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${numsList}`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${numsList}`);
  }
}

// Further Exploration

// function searchNum(numsList) {
//   let lastNum = numsList.pop();

//   if (isIncluded(numsList, lastNum)) {
//     console.log(`The number ${lastNum} is greater than a number or numbers in ${numsList}`);
//   } else {
//     console.log(`The number ${lastNum} is less than all numbers in ${numsList}`);
//   }
// }

// function isIncluded(arr, val) {
//   return arr.some(num => num > val);
// }

getUserInput();