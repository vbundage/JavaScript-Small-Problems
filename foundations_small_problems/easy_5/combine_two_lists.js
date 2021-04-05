function interleave(arr1, arr2) {
  let result = [];

  // for (let index = 0; index < arr1.length; index++) {
  //   result.push(arr1[index], arr2[index]);
  // }

  arr1.forEach((_, idx) => {
    result.push(arr1[idx], arr2[idx]);
  });

  result = arr1.flatMap((elem, index) => [elem, arr2[index]]);

  result = arr1.reduce((arr, elem, index) => {
    return arr.concat(elem, arr2[index]);
  },[]);

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
