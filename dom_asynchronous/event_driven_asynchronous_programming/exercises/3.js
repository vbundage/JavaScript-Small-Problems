"use strict";

// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
  
//   if (callback && typeof callback === 'function') callback(element);
// }



// Further Exploration
const sectionElement = document.querySelector('section');

function makeBold(element) {
  element.style.fontWeight = 'bold';
  const event = new CustomEvent("bolded");
  element.dispatchEvent(event);
}

sectionElement.addEventListener('bolded', event => {
  let sectionElement = document.querySelector('section');
  alert("Highlight added");
  sectionElement.classList.add('highlight');
});

makeBold(sectionElement);