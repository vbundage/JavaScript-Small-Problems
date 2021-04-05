"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const animals = document.getElementById('animals');

  [...animals.children].forEach(child => {
    let delay;

    child.addEventListener('mouseenter', event => {
      const figcaption = event.target.querySelector('figcaption');
      delay = setTimeout(() => {
        figcaption.classList.add('show');
      }, 2000);
    });

    child.addEventListener('mouseleave', event => {
      const figcaption = event.target.querySelector('figcaption');
      clearTimeout(delay);
      figcaption.classList.remove('show');
    });
  });
});