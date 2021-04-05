let merge = function(arr1, arr2) {
  let currIdx1 = 0;
  let currIdx2 = 0;
  let resultArr = [];

  for (let counter = 0; counter < arr1.length + arr2.length; counter += 1) {
    if (arr1[currIdx1] < arr2[currIdx2] || !arr2[currIdx2]) {
      resultArr.push(arr1[currIdx1]);
      currIdx1 += 1;
    } else if (arr1[currIdx1] > arr2[currIdx2] || !arr1[currIdx1]) {
      resultArr.push(arr2[currIdx2]);
      currIdx2 += 1;
    } else {
      resultArr.push(arr1[currIdx1], arr2[currIdx2]);
      currIdx1 += 1;
      currIdx2 += 1;
    }
  }

  return resultArr;
};

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]