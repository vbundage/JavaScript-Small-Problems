// What is the difference between the following two code snippets?
// Check the MDN documentation on while and do...while.


// This code will not run at all. 
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// This code will run at least once.
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
