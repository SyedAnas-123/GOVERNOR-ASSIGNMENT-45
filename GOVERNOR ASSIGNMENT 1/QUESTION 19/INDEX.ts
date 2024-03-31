// Store the locations in an array
let placesToVisit: string[] = ["Tokyo", "Paris", "Santorini", "New York", "Maldives"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("\nBack to Original Order:");
console.log(placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);







// This TypeScript program performs the following actions:

// Stores locations in an array placesToVisit.
// Prints the array in its original order.
// Prints the array in alphabetical order without modifying the actual list.
// Prints the array in reverse alphabetical order without changing the order of the original list.
// Reverses the order of the list and prints it.
// Reverses the order of the list again to bring it back to its original order.
// Sorts the array in alphabetical order and prints it.
// Sorts the array in reverse alphabetical order and prints it.