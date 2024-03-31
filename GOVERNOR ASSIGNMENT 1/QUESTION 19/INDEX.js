var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var placesToVisit = ["Tokyo", "Paris", "Santorini", "New York", "Maldives"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
