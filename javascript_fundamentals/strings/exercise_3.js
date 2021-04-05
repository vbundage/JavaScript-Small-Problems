function repeat(times, text) {
  timesString =

  for (i = 0; i < times; i++) {
    timesString += text;
  }
  
  return timesString;
}

console.log(repeat(3, 'ha')); // 'hahaha'
