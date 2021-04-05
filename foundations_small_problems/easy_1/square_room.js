const readline = require('readline-sync');

const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;

function displaySquareRoom() {
  let answer = metersOrFeet(getInput());

  let length = getLength(answer);
  let width = getWidth(answer);

  if (answer === 'meters') {
    displaySquareMetersSquareFeet(length, width);
  } else {
    displaySquareFeetSquareMeters(length, width);
  }
}

function getInput() {
  console.log("What type of input would you like to use? Meters(m) or Feet(f)");
  return readline.question().toLowerCase();
}

function displaySquareFeetSquareMeters(length, width) {
  let squareFeet = length * width;
  let squareMeters = (squareFeet / SQUARE_METERS_TO_SQUARE_FEET).toFixed(2);

  console.log(`The area of the room is ${squareFeet} square feet (${squareMeters} square meters).`);
}

function displaySquareMetersSquareFeet(length, width) {
  let squareMeters = length * width;
  let squareFeet = (squareMeters * SQUARE_METERS_TO_SQUARE_FEET).toFixed(2);

  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
}

function getLength(answer) {
  console.log(`Enter the length of the room in ${answer}:`);
  return Number(readline.question());
}

function getWidth(answer) {
  console.log(`Enter the width of the room in ${answer}:`);
  return Number(readline.question());
}

function metersOrFeet(answer) {
  if (['meters', 'm'].includes(answer)) return 'meters';
  return 'feet';
}

displaySquareRoom();