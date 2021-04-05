function catAge(humanAge) {

  if (humanAge === 1) {
    return 15;
  } else if (humanAge === 2) {
    return 24;
  }

  return 24 + (4 * (humanAge - 2));
}

console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
