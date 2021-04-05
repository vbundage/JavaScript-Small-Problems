/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const team = {
    kevin: {
      name: 'Kevin Wang',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    louis: {
      name: 'Louis Burton',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    kasper: {
      name: 'Kasper Salto',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    chris: {
      name: 'Chris Lee',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  };

  const list = document.getElementById('team-list');
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  const article = document.getElementById('modal-article');

  function hideModal() {
    overlay.classList.replace('show', 'hide');
    modal.classList.replace('show', 'hide');
    modal.style = `top: 0`;
  }

  const profileTemplate = Handlebars.compile(document.getElementById('profile-content').innerHTML);
  Handlebars.registerHelper('lower_firstname', name => {
    return name.split(' ')[0].toLowerCase();
  });

  Handlebars.registerHelper('upper_firstname', name => {
    return name.split(' ')[0];
  });

  [...list.children].forEach(li => li.addEventListener('click', event => {
    event.preventDefault();

    const anchor = event.currentTarget.querySelector('a');
    const dataName = anchor.dataset.name;
    const teamMember = team[dataName];

    article.innerHTML = profileTemplate(teamMember);
    modal.style = `top: ${window.scrollY + 30}px;`;
    overlay.classList.replace('hide', 'show');
    modal.classList.replace('hide', 'show');
  }));

  document.getElementById('close').addEventListener('click', () => {
    hideModal();
  });

  overlay.addEventListener('click', () => {
    hideModal();
  });

  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') hideModal();
  });
});