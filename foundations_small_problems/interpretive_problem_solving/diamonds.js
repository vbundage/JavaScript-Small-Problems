let diamond = function(num) {
  const STAR = '*';
  const SPACE = ' ';
  let increment = 2;
  let count = 1;

  while (count > 0) {
    console.log(SPACE.repeat((num - count) / 2) + STAR.repeat(count));

    if (count === num) {
      increment = -2;
    }

    count += increment;
  }
};

// Further Exploration
let innerSpaces = function(count) {
  if (count < 0) {
    return '';
  }
  return ' '.repeat(count);
};

let determineSecondStar = function(count) {
  if (count === 1) {
    return 0;
  }
  return 1;
};

let outerSpaces = function(num, count) {
  return ' '.repeat((num - count) / 2);
};

let diamond2 = function(num) {
  let increment = 2;
  let count = 1;
  let star1 = 1;
  let star2 = 0;

  while (count > 0) {
    star2 = determineSecondStar(count);

    console.log(outerSpaces(num, count) +
      '*'.repeat(star1) + innerSpaces(count - 2) +
      '*'.repeat(star2));

    if (count === num) {
      increment = -2;
    }

    count += increment;
  }
};

diamond(1);
diamond(3);
diamond(5);
diamond(9);

diamond2(1);
diamond2(3);
diamond2(5);
diamond2(9);