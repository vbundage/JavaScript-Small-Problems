const readline = require('readline-sync');

function product(num) {
  let total = 1;
  for (let counter = 1; counter <= num; counter++) {
    total *= counter;
  }
  return total;
}

function sum(num) {
  let total = 0;
  for (let counter = 1; counter <= num; counter++) {
    total += counter;
  }
  return total;
}

function sumOrProduct() {
  let num = Number.parseInt(readline.question('Please enter an integer greater than 0: '), 10);
  let answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  let result;
  console.log("");
  switch (answer) {
    case "s":
      result = sum(num);
      console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
      break;
    case "p":
      result = product(num);
      console.log(`The product of the integers between 1 and ${num} is ${result}.`);
      break;
    default:
      console.log("Not a valid input.");
      break;
  }
}

sumOrProduct();