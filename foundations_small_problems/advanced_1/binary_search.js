let binarySearch = function(array, searchItem) {
  let lower = 0;
  let upper = array.length - 1;

  for (let counter = 0; counter <= array.length / 2; counter += 1) {
    let mid = Math.floor((upper - lower) / 2) + lower;
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      lower = mid + 1;
    } else if (array[mid] > searchItem) {
      upper = mid - 1;
    }
  }

  return -1;
};

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6