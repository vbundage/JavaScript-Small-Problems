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

let mergeSort = function(arr) {
  if (arr.length === 1) return arr;

  let subArr1 = mergeSort(arr.slice(0, arr.length / 2));
  let subArr2 = mergeSort(arr.slice(arr.length / 2));

  return merge(subArr1, subArr2);
};

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]