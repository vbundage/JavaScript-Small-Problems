let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(search, arr) {
  found = false;

  arr.forEach(destination => {
    if (destination === search) {
      found = true;
    }
  });
  
  return found;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
