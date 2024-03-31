var favorite_pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the names of each pizza
console.log("My favorite pizzas:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
// Print a sentence using each pizza name
console.log("\nMy thoughts on each pizza:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print an additional sentence about loving pizza
console.log("\nI really love pizza!");
