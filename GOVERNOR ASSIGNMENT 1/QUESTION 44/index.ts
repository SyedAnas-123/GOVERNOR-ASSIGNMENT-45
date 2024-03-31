function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => console.log(`- ${item}`));
    }
    console.log("-----------------------------");
}

// Call the function three times with a different number of arguments each time
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss");
make_sandwich("Vegetarian");
