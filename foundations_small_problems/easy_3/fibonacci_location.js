function findFibonacciIndexByLength(digits) {
  let first = 1;
  let second  = 1;
  let index = 2;
  let fibonacci;

  while (String(fibonacci).length !== digits) {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  }

  if (fibonacci >= Number.MAX_SAFE_INTEGER) console.log("Imprecise calculation. Max safe integer hit.");

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(17));      // 74