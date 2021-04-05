let rotateRightmostDigits = function(number, count) {
  let numberArr = String(number).split('');
  let subArr = numberArr.splice(count * -1);
  subArr = subArr.slice(1).concat(subArr[0]);

  return Number(numberArr.concat(subArr).join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917