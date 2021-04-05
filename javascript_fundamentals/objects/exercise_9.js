let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {}
nestedArray.forEach(elem => {
  person[elem[0]] = elem[1];
});

console.log(person);
