"use strict";

import debounce from './debounce.js';

class Autocomplete {
  constructor(input, url) {
    this.input = input
    this.url = url;

    this.listUI = null;
    this.overlay = null;

    this.wrapInput();
    this.createUI();
    
    this.valueChanged = debounce(this.valueChanged.bind(this), 300);

    this.bindEvents();
    this.reset();
  }

  reset() {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;

    this.draw();
  }

  wrapInput() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  }

  createUI() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }

  bindEvents() {
    this.input.addEventListener('input', this.valueChanged);
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.listUI.addEventListener('mousedown', this.handleMouseDown.bind(this));
  }

  handleMouseDown(event) {
    let element = event.target;
    this.input.value = element.textContent;
    this.reset();
  }

  handleKeydown(event) {
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
        if (this.bestMatchIndex !== null && this.matches.length !== 0) {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;
      case 'Enter':
        this.reset();
        break;
      case 'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;
    }
  }

  valueChanged() {
    let value = this.input.value;
    this.previousValue = value;

    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  }

  draw() {
    while (this.listUI.lastChild) {
      this.listUI.removeChild(this.listUI.lastChild);
    }

    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContext(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');
      
      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }

      li.textContent = match.name;
      this.listUI.appendChild(li);
    });
  }

  generateOverlayContext(value, match) {
    let end = match.name.substr(value.length);
    return value + end;
  }


  fetchMatches(query, callback) {
    let request = new XMLHttpRequest();

    request.addEventListener('load', () => {
      callback(request.response);
    });

    request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    request.responseType = 'json';
    request.send();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const countrySearch = new Autocomplete(input, '/countries?matching=');
});
