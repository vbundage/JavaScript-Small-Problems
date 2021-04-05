const readline = require('readline-sync');

function prompt(message) {
   console.log(`==> ${message}`);
}

function outputOperationsResults() {
  let firstNum = readline.question(prompt("Enter the first number:"));
  let secondNum = readline.question(prompt("Enter the second number:"));

  prompt(`${firstNum} + ${secondNum} = ${addition(firstNum, secondNum)}`);
  prompt(`${firstNum} - ${secondNum} = ${subtraction(firstNum, secondNum)}`);
  prompt(`${firstNum} * ${secondNum} = ${product(firstNum, secondNum)}`);
  prompt(`${firstNum} / ${secondNum} = ${quotient(firstNum, secondNum)}`);
  prompt(`${firstNum} % ${secondNum} = ${remainder(firstNum, secondNum)}`);
  prompt(`${firstNum} ** ${secondNum} = ${power(firstNum, secondNum)}`);
}

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function quotient(num1, num2) {
  return num1 / num2;
}

function remainder(num1, num2) {
  return num1 % num2;
}

function power(num1, num2) {
  return BigInt(num1 ** num2);
}

outputOperationsResults();
