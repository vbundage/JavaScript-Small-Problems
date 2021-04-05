/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const calculator = {
    digitEntry(digit) {
      if (this.entry.textContent === '0' || this.entry.dataset.replace) {
        this.entry.textContent = digit;
        this.entry.removeAttribute('data-replace');
      } else {
        this.entry.textContent += digit;
      }
    },

    decimalEntry() {
      if (!this.entry.textContent.includes('.')) {
        this.entry.textContent += '.';
        this.entry.removeAttribute('data-replace');
      }
    },

    negateEntry() {
      const text = this.entry.textContent;
      if (!text.includes('-') && text !== '0') {
        this.entry.textContent = '-' + text;
        this.entry.removeAttribute('data-replace');
      }
    },

    clearEntry() {
      this.entry.textContent = '0';
    },

    clearOperation() {
      this.operation.textContent = '';
      this.currentOperation = undefined;
      this.numbers = [];
    },

    performCalculation() {
      const calculation =
        this.operations[this.currentOperation](...this.numbers);
      this.numbers.splice(0, 2, calculation);
    },

    addOperation(operation, num) {
      this.operation.textContent += `${num} ${operation} `;
      this.currentOperation = operation;
      this.entry.setAttribute('data-replace', true);
    },

    equalsOperation() {
      this.entry.setAttribute('data-replace', true);
      this.entry.textContent = this.numbers[0];
      this.clearOperation();
    },

    operationEntry(operation) {
      const num = parseFloat(this.entry.textContent);
      this.numbers.push(num);

      if (this.currentOperation) this.performCalculation();
      if (operation !== '=') this.addOperation(operation, num);
      if (operation === '=') this.equalsOperation();
    },

    calculatorButtonClick(event) {
      if (event.target.tagName === 'A') {
        const valEntered = event.target.textContent;
        if (RegExp(/\d/).test(valEntered)) {
          this.digitEntry(valEntered);
        } else if (valEntered === '.') {
          this.decimalEntry();
        } else if (valEntered === 'NEG') {
          this.negateEntry();
        } else if (valEntered === 'C') {
          this.clearEntry();
          this.clearOperation();
        } else if (valEntered === 'CE') {
          this.clearEntry();
        } else {
          this.operationEntry(valEntered);
        }
      }
    },

    setOperations() {
      this.operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => parseFloat((num1 / num2).toFixed(6), 10),
        'x': (num1, num2) => num1 * num2,
        '%': (num1, num2) => num1 % num2
      };
    },

    bindEvents() {
      this.calculator.addEventListener('click', this.calculatorButtonClick.bind(this));
    },

    init() {
      this.calculator = document.getElementById('calculator');
      this.entry = document.getElementById('entry-window');
      this.operation = document.getElementById('operation-window');
      this.numbers = [];
      this.setOperations();
      this.bindEvents();
    }
  };

  calculator.init();
});