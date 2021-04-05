let average = function (arr) {
  let sum = 0;
  // arr.forEach(elem => sum += elem);
  return Math.floor(arr.reduce((acc, curr) => acc + curr) / arr.length);
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
