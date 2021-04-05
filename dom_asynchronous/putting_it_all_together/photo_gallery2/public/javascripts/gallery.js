/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', async () => {
  const templates = {};
  const photos = await getPhotos();

  document.querySelectorAll('[type="text/x-handlebars"]').forEach(template => {
    templates[template.id] = Handlebars.compile(template.innerHTML);
  });

  document.querySelectorAll('[data-type="partial"]').forEach(partial => {
    Handlebars.registerPartial(partial.id, partial.innerHTML);
  });

  function getPhotos() {
    return fetch('/photos')
      .then(response => response.json())
      .then(json => json);
  }

  function makePostRequest(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: data
    })
      .then(response => response.json())
      .then(json => json);
  }

  function getCommentsFor(id) {
    return fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(json => json);
  }

  async function renderComments(photoId) {
    const comments = document.querySelector('#comments ul');
    const photoComments = await getCommentsFor(photoId);
    comments.innerHTML = templates['photo_comments'](
      { comments: photoComments });
  }

  const slideshow = {
    getPhotoInfo(photoId) {
      return photos.find(photo => photo.id === Number(photoId));
    },

    renderPhotoInformation(photoId) {
      const photo = this.getPhotoInfo(photoId);
      this.photoInformation.innerHTML = templates['photo_information'](photo);
    },

    renderPhotos() {
      this.slides.innerHTML = templates['photos']({ photos });
    },

    renderPhotoContent(photoId) {
      this.renderPhotoInformation(photoId);
      renderComments(photoId);
    },

    showPrevSlide(event) {
      event.preventDefault();
      this.slides.prepend(this.slides.lastElementChild);
      const photoId = this.slides.firstElementChild.dataset.id;
      this.renderPhotoContent(photoId);
    },

    showNextSlide(event) {
      event.preventDefault();
      this.slides.append(this.slides.firstElementChild);
      const photoId = this.slides.firstElementChild.dataset.id;
      this.renderPhotoContent(photoId);
    },

    likeOrFavorite(event) {
      event.preventDefault();

      if (event.target.tagName === 'A') {
        const anchor = event.target;
        const dataProperty = event.target.dataset.property;
        if (dataProperty === 'likes') this.likePhoto(anchor);
        if (dataProperty === 'favorites') this.favoritePhoto(anchor);
      }
    },

    async likePhoto(likes) {
      const currPhoto = this.slides.firstElementChild;
      const photoId = currPhoto.dataset.id;
      const  { total } = await makePostRequest('/photos/like', `photo_id=${photoId}`);
      likes.textContent = `♡ ${total} Likes`;
      this.getPhotoInfo(photoId).likes = total;
    },

    async favoritePhoto(favorites) {
      const currPhoto = this.slides.firstElementChild;
      const photoId = currPhoto.dataset.id;
      const { total } = await makePostRequest('/photos/favorite', `photo_id=${photoId}`);
      favorites.textContent = `☆ ${total} Favorites`;
      this.getPhotoInfo(photoId).favorites = total;
    },

    bind() {
      this.prev.addEventListener('click', this.showPrevSlide.bind(this));
      this.next.addEventListener('click', this.showNextSlide.bind(this));
      this.photoInformation.addEventListener('click',
        this.likeOrFavorite.bind(this));
    },

    init() {
      this.slides = document.getElementById('slides');
      this.prev = document.querySelector('.prev');
      this.next = document.querySelector('.next');
      this.photoInformation = document.querySelector('section header');
      this.renderPhotos();
      this.renderPhotoContent(photos[0].id);
      this.bind();
    }
  };

  document.querySelector('form').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const comments = document.querySelector('#comments ul');
    const photoId = slideshow.slides.firstElementChild.dataset.id;
    form.photo_id.value = photoId;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    const commentData = await makePostRequest(form.getAttribute('action'),
      searchParams.toString());

    comments.insertAdjacentHTML('beforeend',
      templates['photo_comment'](commentData));
    form.reset();
  });

  slideshow.init();
});