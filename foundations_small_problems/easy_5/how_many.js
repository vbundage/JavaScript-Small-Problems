let countOccurrences = function (arr) {
  let counterObj = {};
  let lowerArr = arr.map(elem => elem.toLowerCase());

  lowerArr.forEach(elem => {
    counterObj[elem] = counterObj[elem] || 0;
    counterObj[elem] += 1;
  });

  logOccurrences(counterObj);
};

let logOccurrences = function (obj) {
  Object.keys(obj).forEach(key => console.log(`${key} => ${obj[key]}`));
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv', 'TrUck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
