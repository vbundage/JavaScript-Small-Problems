let rotateRightmostDigits = function(number, count) {
  let numberArr = String(number).split('');
  let subArr = numberArr.splice(count * -1);
  subArr = subArr.slice(1).concat(subArr[0]);

  return Number(numberArr.concat(subArr).join(''));
};

let maxRotation = function(number) {
  for (let count = String(number).length; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845