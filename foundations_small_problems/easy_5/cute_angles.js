const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(decimalNum) {
  decimalNum = mod(decimalNum, 360);

  let degrees = Math.floor(decimalNum);
  let minutes = String(Math.floor((decimalNum % 1) * MINUTES_PER_DEGREE));
  let seconds = String(Math.floor((((decimalNum % 1) * MINUTES_PER_DEGREE) % 1)
                  * SECONDS_PER_MINUTE)); // decimal point of degrees -> decimal point of minutes * 60 seconds

  return `${degrees}${DEGREE}${padWithZeroes(minutes)}'${padWithZeroes(seconds)}"`;
}

function padWithZeroes(time) {
  return time.padStart(2, '0');
}
/*
This function will work within a range from 0 to the max integer.
Negative numbers higher than the boundary will start over at 0 and add the remainder
of the higher number mod the max.
For example:
mod(-30, 360) will return 330
mod(-420, 360) will return 60
*/
function mod(num, max) {
  return ((num % max) + max) % max;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
