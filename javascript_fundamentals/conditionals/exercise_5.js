// Take a look at the code below. Without running it, determine what it will log to
// the console. If you're not sure, refer to the MDN documentation on switch
// statements.


// This will log: 'neigh', 'tweet tweet', and '*cricket*'. There are no break
// statements to halt the case statements so the code will fall through. 
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
