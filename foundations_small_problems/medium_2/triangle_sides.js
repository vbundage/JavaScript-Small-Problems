let triangle = function(...sides) {
  sides.sort((side1, side2) => side1 - side2);

  if (isNotValid(sides)) return 'invalid';

  if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

let isNotValid = function(sides) {
  return sides[0] <= 0 || sides[0] + sides[1] < sides[2];
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
