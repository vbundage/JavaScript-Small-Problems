let fridayThe13ths = function(year) {
  let count = 0;
  let date = new Date(year, 0, 13);

  for (let month = 0; month <= 11; month++) {
    date.setMonth(month);
    if (date.getDay() === 5) count += 1;
  }

  return count;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2