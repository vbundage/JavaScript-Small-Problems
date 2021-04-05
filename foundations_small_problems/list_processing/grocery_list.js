let buyFruit = function(arr) {
  let result = [];

  arr.forEach(innerArr => {
    result.push(Array(innerArr[1]).fill(innerArr[0]));
    // for (let idx = 0; idx < innerArr[1]; idx++) {
    //   result.push(innerArr[0]);
    // }
  });

  return [].concat(...result);
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
