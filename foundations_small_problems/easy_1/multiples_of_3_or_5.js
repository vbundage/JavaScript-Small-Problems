function multiSum(num) {
  let numArray = [...Array(num + 1).keys()];
  let sum = 0;

  numArray.forEach(val => {
    if ((val % 3 === 0) || (val % 5 === 0)) sum += val;
  });

  // filteredNums = numArray.filter(val => val % 3 === 0 || val % 5 === 0);
  // filteredNums.reduce((acc, curr) => acc + curr)

  return sum;
}

console.log(multiSum(20));      // 98
console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(1000));    // 234168
