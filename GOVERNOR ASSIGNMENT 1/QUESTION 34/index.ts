let favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Print the names of each pizza
console.log("My favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

// Print a sentence using each pizza name
console.log("\nMy thoughts on each pizza:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print an additional sentence about loving pizza
console.log("\nI really love pizza!");
