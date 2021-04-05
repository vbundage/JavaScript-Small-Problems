"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  ul.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
      const selectedThumbnail = event.target.parentNode;
      const dataTitle = selectedThumbnail.dataset.title;
      const prevThumbnail = document.querySelector('.active');
      const prevImage = document.querySelector('.show');
      const selectedImage = document.querySelector(`figure[data-title=${dataTitle}]`);

      prevThumbnail.classList.remove('active');
      selectedThumbnail.classList.add('active');
      prevImage.classList.replace('show', 'hide');
      selectedImage.classList.replace('hide', 'show');
    }
  });
});