let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Ada Lovelace"];

// Display the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guestList.length; i++) {
    console.log(guestList[i]);
}

// Simulate informing guests about the bigger dinner table
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

// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.\n");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest: string | undefined = guestList.pop(); // Remove last guest
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print messages to the remaining two guests
console.log(`\nDear ${guestList[0]},\nYou are still invited to dinner.\nBest regards,\n[Your Name]`);
console.log(`Dear ${guestList[1]},\nYou are still invited to dinner.\nBest regards,\n[Your Name]`);

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the final state of the guest list (empty list)
console.log("\nFinal Guest List:");
console.log(guestList);




// This program now incorporates the following changes:

// Prints a message informing that only two people can be invited for dinner.
// Removes guests from the list until only two names remain, printing a sorry message to each removed guest.
// Prints invitation messages to the remaining two guests.
// Removes the last two names from the list to ensure it's empty at the end, then prints the final state of the list to confirm it's empty.





