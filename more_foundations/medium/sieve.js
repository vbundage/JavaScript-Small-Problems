"use strict";

function primes(num) {
  let range = Array(num - 1).fill().map((_, idx) => idx + 2);

  for (let idx = 0; idx < range.length; idx += 1) {
    let currNum = range[idx];
    if (!currNum) continue;

    for (let multiple = 2; multiple < range.length; multiple += 1) {
      let index = range.indexOf(currNum * multiple) >= 1 ? range.indexOf(currNum * multiple) : 0;
      if (index) {
        range[index] = null;
      }
    }
  }

  return range.filter(num => num);
}

module.exports = primes;