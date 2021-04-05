/*
What do you think is logged on line 7. Try to answer the question before you run the code.

Line 7 will log 'NaN' because 'this' on line 4 refers to the properties
'firstName' and 'lastName' of the 'global' object which are not defined.

// Anywhere outside a function, the keyword this is bound to the global object.
// If the keyword is used inside a function, then its value depends on how the function was invoked.
*/

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);