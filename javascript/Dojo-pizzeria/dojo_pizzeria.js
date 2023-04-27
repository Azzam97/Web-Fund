function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}
var pizza1 = pizzaOven("deep fish", "traditional", "mozzerella", [
  "pepporoni",
  "sausage",
]);
console.log(pizza1);
var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzerella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);
var pizza3 = pizzaOven("deep fish", "traditional", "mozzerella", [
  "jalapeno",
  "shrimps",
]);
console.log(pizza3);
var pizza4 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzerella", "feta"],
  ["salami"]
);
console.log(pizza4);
function randomPizza() {
    var pizza = {};
    pizza.crustType = Math.floor(Math.random() * (2-0)+0);
    pizza.sauceType = Math.floor(Math.random() * (4-2)+2);
    pizza.cheeses = Math.floor(Math.random() * (6-4)+4);
    pizza.toppings = Math.floor(Math.random() * (10-6)+6);
    if (pizza.crustType == 01){
      pizza.crustType = "deep fish";
    }
    else{
      pizza.crustType = "hand tossed"
    }
    if (pizza.sauceType == 2){
      pizza.sauceType = "traditional";
    }
    else{
      pizza.sauceType = "marinara";
    }
    if (pizza.cheeses == 4){
      pizza.cheeses = "mozzerella";
    }
    else{
      pizza.cheeses = "[mozzerella,feta]";
    }
    if(pizza.toppings == 6){
      pizza.toppings = "[pepporoni,sausage]";
    }
    else if(pizza.toppings == 7){
      pizza.toppings ="[mushrooms,olives,onions]";
    }
    else if(pizza.toppings == 8){
      pizza.toppings ="[jalapeno,shrimps]";
    }
    else{
      pizza.toppings = "salami";
    }
    return pizza;
  }
  console.log(randomPizza())