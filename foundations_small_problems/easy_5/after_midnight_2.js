const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = 1440;

let calculateMinutes = function(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = (hours * MINUTES_IN_AN_HOUR) + Number(time.slice(3));

  return minutes % MINUTES_IN_A_DAY;
};

let afterMidnight = function(time) {
  return calculateMinutes(time);
};

let beforeMidnight = function(time) {
  let minutes = calculateMinutes(time);
  return minutes > 0 ? MINUTES_IN_A_DAY - calculateMinutes(time) : 0;
};

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);