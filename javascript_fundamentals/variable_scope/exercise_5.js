// What will the following code log to the console and why? Don't run it until you have tried to answer.


// A ReferenceError will be raised as a is in the inner scope is attempting
// to be logged when it has not been defined.
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();