function union(array1, array2) {
  let setObj = {};

  array1.forEach(int => setObj[int] = int);
  array2.forEach(int => setObj[int] = int);

  return Object.values(setObj);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
