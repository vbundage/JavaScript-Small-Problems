// Determine the output that the following code will log to the console.

// Nothing will output as the multiplesOfThree function has not been invoked.
function multiplesOfThree() {
  let divisor = 1;
  let dividend;

  for (dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;