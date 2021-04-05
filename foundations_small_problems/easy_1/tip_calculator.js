const readline = require('readline-sync');

let billAmount = Number.parseFloat(readline.question('What is the bill? '));
let tipRate = Number.parseFloat(readline.question('What is the tip percentage? '));
let tipAmount = (billAmount * (tipRate / 100));
let totalAmount = billAmount + tipAmount;

console.log("");
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);