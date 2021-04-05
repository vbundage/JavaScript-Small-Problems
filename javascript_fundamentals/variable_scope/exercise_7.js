// What will the following code log to the console and why? Don't run it until
// you have tried to answer.


// This will log 1. The a is still able to be referenced as it was defined in
// the outer scope.
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
