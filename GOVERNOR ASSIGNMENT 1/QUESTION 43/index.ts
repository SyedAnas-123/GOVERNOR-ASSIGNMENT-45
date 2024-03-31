// Original array of magician's names
let original_magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Function to modify magician names by adding "the Great" to each name
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];

    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }

    return great_magicians;
}

// Make a copy of the original array and call make_great function with the copy
let modified_magician_names: string[] = make_great(original_magician_names.slice());

// Show the original and modified arrays
console.log("Original Magicians:");
show_magicians(original_magician_names);

console.log("\nModified Magicians:");
show_magicians(modified_magician_names);




// In this code:

// We define the original array of magician's names original_magician_names.
// We define the function make_great to modify magician names by adding "the Great" to each name.
// Inside make_great, we iterate over the magicians array and push the modified names into a new array great_magicians.
// We make a copy of the original array using the slice method before calling make_great function to ensure the original array remains unchanged.
// We call make_great function with the copied array and store the modified array in modified_magician_names.
// Finally, we show both the original and modified arrays using the show_magicians function.