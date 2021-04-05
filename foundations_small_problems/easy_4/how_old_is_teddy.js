function randomTeddyAge(min, max) {
  if (min > max) [min, max] = [max, min];
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let teddyAge = randomTeddyAge(120, 20);
console.log(`Teddy is ${teddyAge} years old!`);