let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

let transactionsFor = function(inventoryItem, transactions) {
  return transactions.filter(item => item.id === inventoryItem);
};

let determineQuantity = function(item) {
  return item.movement === 'in' ? item.quantity : (-1 * item.quantity);
};

let isItemAvailable = function(inventoryItem, transactions) {
   let sumQuantity = transactionsFor(inventoryItem, transactions)
    .reduce((acc, item) => acc + determineQuantity(item), 0);
   return sumQuantity > 0;
};

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
