const multiply = (num1, num2) => num1 * num2;
const square = num => multiply(num, num);

function powerToN(num, pow) {
  let result = 1;

  for (let counter = 0; counter < pow; counter++) {
    result = multiply(result, num);
  }
  return result;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true

console.log(powerToN(2, 3) === 8);
