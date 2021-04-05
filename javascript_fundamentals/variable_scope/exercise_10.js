// What will the following code log to the console and why? Don't run it
// until you have tried to answer.


// This will log '{ firstName: Jane, lastName: Doe' because a is an
// immutable object. The keys can be reassigned values. 
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
