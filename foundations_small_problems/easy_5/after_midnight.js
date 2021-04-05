const MINUTES_IN_AN_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;
const MINUTES_IN_A_WEEK = MINUTES_IN_A_DAY * 7;

let adjustDeltaTime = function (num, max) {
  return ((num % max) + max) % max;
};

let dayOfWeek = function (time) {
  let minutes = adjustDeltaTime(time, MINUTES_IN_A_WEEK);
  let day = new Date('January 19, 2020');
  day.setMinutes(minutes);

  return day.toLocaleDateString('en-US', { weekday: 'long'});
};

let padWithZeroes = function(num) {
  return String(num).padStart(2, '0');
};

let timeOfDay2 = function (time) {
  let hours = parseInt(adjustDeltaTime(time, MINUTES_IN_A_DAY) /
                MINUTES_IN_AN_HOUR, 0);
  let minutes = Math.round((adjustDeltaTime(time, MINUTES_IN_A_DAY) /
                  MINUTES_IN_AN_HOUR) % 1 * MINUTES_IN_AN_HOUR);

  return `${dayOfWeek(time)} ${padWithZeroes(hours)}:${padWithZeroes(minutes)}`;
};

let timeOfDay1 = function (time) {
  let hours = parseInt(adjustDeltaTime(time, MINUTES_IN_A_DAY) /
                MINUTES_IN_AN_HOUR, 0);
  let minutes = Math.round((adjustDeltaTime(time, MINUTES_IN_A_DAY) /
                  MINUTES_IN_AN_HOUR) % 1 * MINUTES_IN_AN_HOUR);

  return `${padWithZeroes(hours)}:${padWithZeroes(minutes)}`;
};

console.log(timeOfDay1(0) === "00:00");
console.log(timeOfDay1(-3) === "23:57");
console.log(timeOfDay1(35) === "00:35");
console.log(timeOfDay1(-1437) === "00:03");
console.log(timeOfDay1(3000) === "02:00");
console.log(timeOfDay1(800) === "13:20");
console.log(timeOfDay1(-4231) === "01:29");
console.log('');
console.log(timeOfDay2(0));
console.log(timeOfDay2(-3));
console.log(timeOfDay2(35));
console.log(timeOfDay2(-1437));
console.log(timeOfDay2(3000));
console.log(timeOfDay2(800));
console.log(timeOfDay2(-4231));