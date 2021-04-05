// What will the following code log to the console and why? Don't run it until 
// you have tried to answer.

// This will log undefined to the console. The variable with var will be 
// hoisted but not assigned until line 3.
console.log(greeting);

var greeting = 'Hello world!';