let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
