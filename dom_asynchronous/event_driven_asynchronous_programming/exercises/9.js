"use strict";

const tracker = (() => {
  const events = [];

  return {
    add(event) {
      if (!events.includes(event)) events.push(event);
    },
    
    list() {
      return events.slice();
    },

    elements() {
      return events.map(event => event.target);
    },

    clear() {
      events.length = 0;
      return this.list().length;
    }
  }
})();

function track(callback) {
  return function(event) {
    tracker.add(event);
    callback(event);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const divRed = document.querySelector('#red');
  const divBlue = document.querySelector('#blue');
  const divOrange = document.querySelector('#orange');
  const divGreen = document.querySelector('#green');
  
  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
});