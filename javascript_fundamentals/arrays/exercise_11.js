let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let length = groceryList.length;


for (let i = 0; i < length; i++) {
  console.log(groceryList.shift());
}

console.log(groceryList);
