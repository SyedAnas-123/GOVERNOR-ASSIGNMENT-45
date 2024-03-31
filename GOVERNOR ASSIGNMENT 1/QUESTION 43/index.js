// Original array of magician's names
var original_magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Function to modify magician names by adding "the Great" to each name
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Make a copy of the original array and call make_great function with the copy
var modified_magician_names = make_great(original_magician_names.slice());
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
