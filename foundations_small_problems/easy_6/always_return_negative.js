let negative = function(num) {
  return num >= 0 ? num * -1 : num;
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// Further Exploration
// Object.is(0, -0) can be used to distinguish between 0 and -0
// 0 === -0 will return true though
