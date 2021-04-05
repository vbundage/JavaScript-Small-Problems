// function penultimate(text) {
//   let textSplit = text.split(' ');
//   return textSplit[textSplit.length - 2];
// }

// Further exploration
function penultimate(text) {
  let textSplit = text.split(' ');
  if (textSplit.length <= 2) {
    return textSplit[0];
  }
  return textSplit[Math.floor(textSplit.length / 2)];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

console.log(penultimate("last find word too") === "word");
