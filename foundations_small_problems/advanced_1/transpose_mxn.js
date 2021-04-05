let setupMatrixRows = function(length) {
  let newMatrix = [];
  for (let idx = 0; idx < length; idx += 1) {
    newMatrix.push([]);
  }
  return newMatrix;
};

let transpose = function(matrix) {
  let rowLength = matrix[0].length;
  let transposedMatrix = setupMatrixRows(rowLength);

  for (let rowIdx = 0; rowIdx < rowLength; rowIdx += 1) {
    matrix.forEach(subArr => {
      transposedMatrix[rowIdx].push(subArr[rowIdx]);
    });
  }

  return transposedMatrix;
};

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);
console.log(newMatrix);
console.log(matrix);

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));