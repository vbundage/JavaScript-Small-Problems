let isValid = function(angles) {
  let sumOfAngles = angles.reduce((acc, curr) => acc + curr);
  let notZero = angles.slice().sort((ang1, ang2) => ang1 - ang2)[0] > 0;
  return sumOfAngles === 180 && notZero;
};

let triangle = function(...angles) {
  if (!isValid(angles)) return 'invalid';

  if (angles.find(angle => angle === 90)) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
