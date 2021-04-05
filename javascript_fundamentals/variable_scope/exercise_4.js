// What will the following code log to the console and why? Don't run it until 
// you have tried to answer.


// This will log 1 to the console. let a was defined in the function scope
// and will be available in the block scope of the conditional. 
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();