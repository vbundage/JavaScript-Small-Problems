// function oddities(arr) {
//   return arr.filter((_, index) => index % 2 === 0);
// }

function oddities(arr) {
  let oddElem = [];
  for (let idx = 1; idx < arr.length; idx += 2) {
    oddElem.push(arr[idx]);
  }
  return oddElem;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
