"use strict";

function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement || !(parentElement instanceof Element)) return;
  
  parentElement.addEventListener(eventType, event => {
    let innerElements = [...parentElement.querySelectorAll(selector)];
    if (innerElements.includes(event.target)) callback(event);
  });

  return true;
}

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};