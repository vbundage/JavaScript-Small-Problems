const readline = require('readline-sync');
/* Further Exploration */
function computeProduct(numArr) {
  return numArr.reduce((product, curr) => product * curr);
}

function computeSum(numArr) {
  return numArr.reduce((sum, curr) => sum + curr);
}

function validInteger() {
  let num = Number.parseInt(readline.question('Please enter an integer greater than 0: '), 10);
  while (isNaN(num) || num < 1) {
    console.log("Sorry, that is not a valid integer.");
    num = Number.parseInt(readline.question('Please enter an integer greater than 0: '), 10);
  }
  return num;
}

function validOperation() {
  let answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  while (!['s', 'p'].includes(answer)) {
    console.log("Sorry, that is not a valid operation.");
    answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  }
  return answer;
}

function generateArrayOfIntegers(num) {
  let numArr = [];
  for (let counter = 1; counter <= num; counter++) {
    numArr.push(counter);
  }
  return numArr;
}

function sumOrProduct() {
  let num = validInteger();
  let answer = validOperation();
  let numArr = generateArrayOfIntegers(num);

  let result;
  console.log("");
  switch (answer) {
    case "s":
      result = computeSum(numArr);
      console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
      break;
    case "p":
      result = computeProduct(numArr);
      console.log(`The product of the integers between 1 and ${num} is ${result}.`);
      break;
  }
}

sumOrProduct();