/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const CALCULATIONS = {
    '/': (numA, numB) => {
      if (numA === 0 || numB === 0) return 0;
      return (numA / numB).toFixed(1);
    },
    '+': (numA, numB) => numA + numB,
    '-': (numA, numB) => numA - numB,
    '*': (numA, numB) => numA * numB,
  };

  const form = document.querySelector('form');
  const result = document.getElementById('result');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const firstNum = parseInt(form['first-number'].value, 10);
    const secondNum = parseInt(form['second-number'].value, 10);
    const operator = document.getElementById('operator').value;
    result.textContent = CALCULATIONS[operator](firstNum, secondNum);
  });
});