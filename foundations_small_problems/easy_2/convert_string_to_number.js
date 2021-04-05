const NUMERICS = {
  '0' : 0,
  '1' : 1,
  '2' : 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6,
  '7' : 7,
  '8' : 8,
  '9' : 9
};

function stringToInteger(intStr) {
  let charArr = intStr.split('');
  let numericPlace = 1;
  let convertedInt = 0;

  for (let count = 1; count < charArr.length; count++) {
    numericPlace = numericPlace * 10;
  }

  charArr.forEach(elem => {
    convertedInt += (NUMERICS[elem] * numericPlace);
    numericPlace /= 10;
  });

  return convertedInt;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("0") === 0); // logs true
