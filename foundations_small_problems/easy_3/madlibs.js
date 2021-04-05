const readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Can you ${verb} with this ${noun}? Must be nice.
That's a ${adjective} ${noun}.
Maybe the ${noun} will ${verb} ${adverb} up the sidewalk.`);