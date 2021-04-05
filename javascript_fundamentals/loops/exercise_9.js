// Loop over the elements of the array fish, logging each one, and terminate
// the loop as soon as you encounter the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
  
  if (fish[i] === 'Nemo') {
    break;
  }
}
