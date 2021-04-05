
const inventory = (function() {
  return {
    lastId: 0,
    collection: [],
    setDate: function() {
      let date = new Date();
      document.getElementById('order_date').textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      let iTmpl = document.getElementById('inventory_item');
      this.template = Handlebars.compile(iTmpl.innerHTML);
      iTmpl.remove();
    },
    add: function() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stockNumber: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      let foundItem;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          foundItem = item;
          return false;
        }
        return undefined;
      });

      return foundItem;
    },
    update: function(itemRow) {
      let id = this.findID(itemRow);
      let item = this.get(id);

      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stockNumber = itemRow
        .querySelector("[name^=item_stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
    },
    newItem: function(event) {
      event.preventDefault();
      let item = this.add();
      let itemHTML = this.template({ id: item.id });

      document.getElementById('inventory')
        .insertAdjacentHTML('beforeend', itemHTML);
    },
    findParent: function(event) {
      return event.target.closest("tr");
    },
    findID: function(itemRow) {
      return +itemRow.querySelector("input[type=hidden]").value;
    },
    deleteItem: function(event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        let itemRow = this.findParent(event);

        this.remove(this.findID(itemRow));
        itemRow.remove();
      }
    },
    updateItem: function(event) {
      if (event.target.tagName === 'INPUT') {
        let itemRow = this.findParent(event);
        this.update(itemRow);
      }
    },
    bindEvents: function() {
      document.getElementById("add_item")
        .addEventListener("click", this.newItem.bind(this));
      document.getElementById("inventory")
        .addEventListener("click", this.deleteItem.bind(this));
      document.getElementById("inventory")
        .addEventListener("focusout", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', inventory.init.bind(inventory));
