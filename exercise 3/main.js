//You will be given an array of drinks, with each drink being an object with two properties: `name` and `price`. Create a function with the drinks array as an argument and return the drinks objects sorted by price in ascending order.

//Assume that the following array of drink objects needs to be sorted:


const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  // { name: "orange", price: 20 },
  // { name: "grape", price: 30 },
];

const sortDrinksByPrice = drinks.sort((a, b) => a.price - b.price);
console.log(sortDrinksByPrice);

//The output of the sorted drinks object will be:

//sortDrinkByPrice(drinks)    ➞    [{name: "lime", price: 10}, {name: "lemonade", price: 50}]