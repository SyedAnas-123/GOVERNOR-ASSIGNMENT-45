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



//!This program follows the steps specified in the exercise:

//!Displays the original guest list.
//!Simulates one guest not being able to attend and replaces them with a new guest.
//!Displays the updated guest list.
//!Prints the name of the guest who can't make it.
//!Prints invitation messages to each person who is still in the list.









