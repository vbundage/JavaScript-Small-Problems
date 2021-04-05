/*
Write a function objectsEqual that accepts two object arguments and returns
true or false depending on whether the objects have the same key/value pairs.
*/

// function objectsEqual(obj1, obj2) {
//   if (Object.keys(obj1).sort().join('') === Object.keys(obj2).sort().join('')) {
//     if (Object.values(obj1).sort().join('') === Object.values(obj2).sort().join('')) {
//       return true;
//     }
//   }
//   return false;
// }

// function objectsEqual(obj1, obj2) {
//   let obj1Arr = Object.keys(obj1);
//   let obj2Arr = Object.keys(obj2);
//   if (obj1Arr.length !== obj2Arr.length) return false;

//   for (let idx = 0; idx < obj1Arr.length; idx++) {
//     let key = obj1Arr[idx];
//     if (obj2.hasOwnProperty(key)) {
//       if (obj1Arr[key] !== obj2Arr[key]) {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false