var guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Printing invitation messages to each person in the guestList array
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. Please join us for an evening of stimulating conversation and delicious food.\nBest regards,\n[Your Name]"));
}
