// What will the following code log to the console and why? Don't run it until 
// you have tried to answer.


// This will raise an error that myValue is not defined. myValue is in the if
// conditionals block scope and not accessible outside of it.
if (true) {
  let myValue = 20;
}

console.log(myValue);