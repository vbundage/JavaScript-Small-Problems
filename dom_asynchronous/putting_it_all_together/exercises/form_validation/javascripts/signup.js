/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const signUp = {

    validateInput(event) {
      let text = '';
      const label = event.target.previousElementSibling;

      if (event.target.validity.patternMismatch) {
        text = "Please Enter a valid " + label.textContent + '.';
      } else if (event.target.validity.tooShort) {
        text = label.textContent + ' must be at least 10 characters long.';
      } else if (event.target.validity.valueMissing) {
        text = label.textContent + " is a required field.";
      }

      if (!event.target.validity.valid) {
        event.target.nextElementSibling.textContent = text;
        event.target.classList.add("invalid");
      }
    },

    validateKeyPress(event) {
      const inputName = event.target.getAttribute('name');
      if (inputName === 'first_name' || inputName === 'last_name') {
        if (!RegExp(/[a-zA-Z'\s]/).test(event.key)) event.preventDefault();
      } else if (inputName === 'credit_card') {
        if (event.key.length === 1 && !RegExp(/\d/).test(event.key)) {
          event.preventDefault();
        }
      }
    },

    removeErrorMsg(event) {
      if (this.isValidForm()) this.form.firstElementChild.classList.add('hide');

      if (event.target.tagName === 'INPUT') {
        event.target.nextElementSibling.textContent = '';
        event.target.classList.remove("invalid");
      }
    },

    isValidForm() {
      return this.inputs.every(input => input.validity.valid);
    },

    validateForm(event) {
      event.preventDefault();

      if (!this.isValidForm()) {
        this.form.firstElementChild.classList.remove('hide');
        this.inputs.forEach(input => {
          input.dispatchEvent(new Event('focusout'));
        });
        return;
      }

      const serialized = document.getElementById('serialized');
      serialized.querySelector('p').textContent = this
        .encodeFormData().toString();
    },

    autoTabForward(event) {
      if (
        event.target.value.length === 4 &&
        RegExp(/\d/).test(event.key)) {
        event.target.nextElementSibling.focus();
      }
    },

    encodeFormData() {
      const data = new URLSearchParams(new FormData(this.form));
      data.set('credit_card', data.getAll('credit_card').join(''));
      return data;
    },

    bindEvents() {
      this.inputs.forEach(input => {
        input.addEventListener('focusout', this.validateInput.bind(this));
      });

      this.creditCardInputs.slice(0, 3).forEach(input => {
        input.addEventListener('keyup', this.autoTabForward.bind(this));
      });
      this.form.addEventListener('keydown', this.validateKeyPress.bind(this));
      this.form.addEventListener('focusin', this.removeErrorMsg.bind(this));
      this.form.addEventListener('submit', this.validateForm.bind(this));
    },

    init() {
      this.form = document.querySelector('form');
      this.inputs = [...document.querySelectorAll('input')];
      this.creditCardInputs = this.inputs
        .filter(input => input.name.includes('credit-card'));
      this.bindEvents();
    }
  };

  signUp.init();
});