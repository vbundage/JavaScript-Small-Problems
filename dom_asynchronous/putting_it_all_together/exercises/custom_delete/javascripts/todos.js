/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const todoItems = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  const todosTemplate = Handlebars
    .compile(document.getElementById('todos-template').innerHTML);

  const todos = {
    togglePrompt() {
      this.overlay.classList.toggle('hide');
      this.prompt.classList.toggle('hide');
    },

    buttonDelete(event) {
      if (event.target.tagName === 'SPAN') {
        const todo = event.target.closest('li');
        this.currId = parseInt(todo.dataset.id, 10);
        this.togglePrompt();
      }
    },

    menuDelete() {
      this.currId = parseInt(this.contextMenu.dataset.id, 10);
      this.togglePrompt();
    },

    hidePrompt() {
      this.overlay.classList.toggle('hide');
      this.prompt.classList.toggle('hide');
    },

    hideContextMenu() {
      this.contextMenu.classList.add('hide');
    },

    deleteTodo() {
      const todo = document.querySelector(`li[data-id="${this.currId}"]`);
      const todoItem = todoItems.filter(item => item.id === this.currId)[0];
      if (todoItem) todoItems.splice(todoItems.indexOf(todoItem), 1);
      todo.remove();
      this.hidePrompt();
    },

    showContextMenu(event) {
      if (event.target.tagName === 'LI') {
        event.preventDefault();

        this.contextMenu.style = `top: ${event.clientY}px; left: ${event.clientX}px`;
        this.contextMenu.dataset.id = event.target.dataset.id;
        this.hideContextMenu();

        setTimeout(() => {
          this.contextMenu.classList.remove('hide');
        }, 150);
      }
    },

    bindEvents() {
      this.list.addEventListener('click', this.buttonDelete.bind(this));
      this.list.addEventListener('contextmenu',
        this.showContextMenu.bind(this));
      this.overlay.addEventListener('click', this.hidePrompt.bind(this));
      this.yesBtn.addEventListener('click', this.deleteTodo.bind(this));
      this.noBtn.addEventListener('click', this.hidePrompt.bind(this));
      this.deleteMenu.addEventListener('click', this.menuDelete.bind(this));
      document.addEventListener('click', this.hideContextMenu.bind(this));
    },

    init() {
      this.todoItems = todoItems;
      this.currId = undefined;
      this.list = document.querySelector('#todos ul');
      this.overlay = document.getElementById('overlay');
      this.prompt = document.getElementById('prompt');
      this.yesBtn = document.getElementById('yes');
      this.noBtn = document.getElementById('no');
      this.contextMenu = document.getElementById('context-menu');
      this.deleteMenu = document.getElementById('delete-menu');

      this.list.innerHTML = todosTemplate({ todoItems });
      this.bindEvents();
    }
  };

  todos.init();
});