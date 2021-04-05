function clone(obj) {
  let target = {}
  Object.assign(target, obj);
  return target;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
