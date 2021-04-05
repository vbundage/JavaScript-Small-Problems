/*
The method franchise.allMovies is supposed to return the following array:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
Explain why this method will not return the desired object. Try fixing
this problem by taking advantage of JavaScript lexical scoping rules.

The `franchise` method will return [ 'undefined 1', 'undefined 2', 'undefined 3' ]
because `this` on line 5 refers to the global object. The execution context is
set within a nested function without a preserved explicit execution context.

We can preserve the execution context by assigning a variable `self` in an outer
scope to `this` and referencing the property of `self.name` on `line 5`
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());