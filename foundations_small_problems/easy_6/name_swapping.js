let swapName = function(name) {
  let [lastName, ...names] = name.split(' ').reverse();
  return `${lastName}, ${names.reverse().join(' ')}`;
};

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
console.log(swapName('Joe Roberts'));                     // "Roberts, Joe"
