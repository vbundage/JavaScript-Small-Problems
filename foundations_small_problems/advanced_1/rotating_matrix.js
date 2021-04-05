let setupMatrixRows = function(length) {
  let newMatrix = [];
  for (let idx = 0; idx < length; idx += 1) {
    newMatrix.push([]);
  }
  return newMatrix;
};

let rotate90 = function(matrix) {
  let rowLength = matrix[0].length;
  let colLength = matrix.length;
  let rotatedMatrix = setupMatrixRows(rowLength);

  for (let rowIdx = 0; rowIdx < rowLength; rowIdx += 1) {
    for (let colIdx = colLength - 1; colIdx >= 0; colIdx -= 1) {
      rotatedMatrix[rowIdx].push(matrix[colIdx][rowIdx]);
    }
  }

  return rotatedMatrix;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]