let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Display the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}

// Simulate one guest not being able to make it
let unableToAttend: string = guestList.shift(); // Remove the first guest
console.log(`\nUnfortunately, ${unableToAttend} can't make it to the dinner.\n`);

// Replace the guest who can't make it with someone else
guestList.push("Isaac Newton");

// Display the updated guest list
console.log("Updated Guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}

// Print the name of the guest who can't make it
console.log(`\n${unableToAttend} can't make it to the dinner.\n`);

// Print invitation messages to each person who is still in the list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. Please join us for an evening of stimulating conversation and delicious food.\nBest regards,\n[Your Name]`);
}

// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.\n");

// Add new guests
guestList.unshift("Galileo Galilei"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla"); // Add one new guest to the middle
guestList.push("Ada Lovelace"); // Use push() to add one new guest to the end

// Print new invitation messages for each person in the list
console.log("Updated Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. Please join us for an evening of stimulating conversation and delicious food.\nBest regards,\n[Your Name]`);
}





//! This program now incorporates the following changes:

// !Adds a new guest to the beginning of the list.
// !Adds a new guest to the middle of the list.
// !Uses push() to add a new guest to the end of the list.
// !Prints a new set of invitation messages for each person in the updated list.
// !Informs about finding a bigger dinner table at the end.
