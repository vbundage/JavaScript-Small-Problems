let sequence = function(num) {
  let result = [];

  // [...Array(5)].forEach((_, idx) => {
  //   result.push(idx + 1);
  // });

  result = [...Array(5)].map((_, idx) => idx + 1);

  return result;

    // return [...Array(num + 1).keys()].filter(num => num > 0);
};

console.log(sequence(5));
