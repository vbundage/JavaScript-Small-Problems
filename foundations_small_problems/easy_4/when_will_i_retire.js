const readline = require('readline-sync');

let getUserAge = readline.question("What is your age? ");
let getUserRetirementAge = Number(readline.question("At what age would you like to retire? "));
let currDate = new Date(); // Without new this would return a String representation of Date instead of a new Date object.
let currYear = currDate.getFullYear();
let retirementYear = currYear + getUserRetirementAge;
let retirementAgeGap = getUserRetirementAge - getUserAge;

console.log(`It's ${currYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${retirementAgeGap} years of work to go!`);