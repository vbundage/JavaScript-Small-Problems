function runningTotal(arr) {
  if (arr.length === 0) return [];
  let runningArr = [arr[0]];

  for (let idx = 1; idx < arr.length; idx++) {
    runningArr.push(runningArr[idx - 1] + arr[idx]);
  }

  return runningArr;
}

// Further Exploration
function runningTotal2(arr) {
  let sum = 0;

  return arr.map((_, idx) => {
            sum += arr[idx];
            return sum;
          });
}

console.log(runningTotal2([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal2([3]));                    // [3]
console.log(runningTotal2([]));                     // []