/* eslint-disable max-lines-per-function */
"use strict";

(() => {
  class GroceryList {
    constructor(id) {
      this.list = document.getElementById(id);
    }

    addItem(itemName, quantity) {
      const newItem = document.createElement('li');
      newItem.textContent = `${quantity} ${itemName}`;
      this.list.append(newItem);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const groceryList = new GroceryList('grocery-list');
    const getValueOf = (selector) => document.querySelector(selector).value;

    form.addEventListener('submit', event => {
      event.preventDefault();

      let itemName = getValueOf('#name');
      let quantity = getValueOf('#quantity') || '1';

      groceryList.addItem(itemName, quantity);

      form.reset();
    });
  });
})();