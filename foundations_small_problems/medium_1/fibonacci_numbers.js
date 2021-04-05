let fibonacciRecursive = function(num) {
  if (num <= 2) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};


// console.log(fibonacciRecursive(1));       // 1
// console.log(fibonacciRecursive(2));       // 1
// console.log(fibonacciRecursive(3));       // 2
// console.log(fibonacciRecursive(4));       // 3
// console.log(fibonacciRecursive(5));       // 5
// console.log(fibonacciRecursive(12));      // 144
// console.log(fibonacciRecursive(20))      // 6765

let fibonacciProcedural = function(nth) {
  let result = [1, 1];

  for (let count = 3; count <= nth; count++) {
    result = [result[1], result[0] + result[1]];
  }

  return result[1];
};

// console.log(fibonacciProcedural(20));       // 6765
// console.log(fibonacciProcedural(50));       // 12586269025
// console.log(fibonacciProcedural(75));       // 2111485077978050
// console.log(fibonacciProcedural(78));
// console.log(fibonacciProcedural(100));
// console.log(fibonacciProcedural(10000));

let fibonacciNumbers = {};
let fibonacciMemoization = function(nth) {
  if (nth <= 2) {
    return 1;
  } else if (fibonacciNumbers[nth]) {
    return fibonacciNumbers[nth]; // if the value exists in the lookup table immediately return it
  } else {
    fibonacciNumbers[nth] = fibonacciMemoization(nth - 1) + fibonacciMemoization(nth - 2);
  }

  return fibonacciNumbers[nth];
};

console.log(fibonacciMemoization(1));       // 1
console.log(fibonacciMemoization(2));       // 1
console.log(fibonacciMemoization(3));       // 2
console.log(fibonacciMemoization(4));       // 3
console.log(fibonacciMemoization(5));       // 5
console.log(fibonacciMemoization(12));      // 144
console.log(fibonacciMemoization(75))      // 6765
