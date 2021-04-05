// What will the following code log to the console and why? Don't run it
// until you have tried to answer.


// This will log false as the second b being defined is a separate variable
// from the b that was assigned to false in the outer scope.
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
