/* eslint-disable max-lines-per-function */
/*
The code below is expected to output the following when run:

> let helloVictor = createGreeter('Victor');
> helloVictor.greet('morning');
= Good Morning Victor
*/

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`; // name by itself works because of the parameter name. This is a demonstration of closures.
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');