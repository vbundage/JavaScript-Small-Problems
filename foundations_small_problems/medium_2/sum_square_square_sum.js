let sumSquare = function(num) {
  return [...Array(num + 1).keys()]
          .reduce((sum, num) => sum + num) ** 2;
};

let squareSum = function(num) {
  return [...Array(num + 1).keys()]
          .reduce((sum, num) => sum + (num ** 2));
};

let sumSquareDifference = function(num) {
  return sumSquare(num) - squareSum(num);
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150