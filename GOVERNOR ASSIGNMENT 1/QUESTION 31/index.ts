let usernames: string[] = ["admin", "alice", "bob", "charlie", "david"];

// Check if the list of users is not empty
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is empty now
if (usernames.length === 0) {
    console.log("We need to find some users!");
}


// In this program:

// We add an additional if test before the loop to check if the list of users is not empty. If it's not empty, we proceed to print greetings to each user as before. If it's empty, we print the message "We need to find some users!".
// After printing the greetings, we remove all usernames from the array and check if the list of users is empty again. If it is, we print the same message.