let current_users: string[] = ["alice", "bob", "charlie", "david", "emily"];
let new_users: string[] = ["emily", "frank", "george", "harry", "alice"];

for (let new_username of new_users) {
    let lower_new_username: string = new_username.toLowerCase();
    let usernameExists: boolean = current_users.some(user => user.toLowerCase() === lower_new_username);

    if (usernameExists) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}



// n this program:

// We have two arrays: current_users containing existing usernames and new_users containing new usernames.
// We loop through the new_users array, and for each username, we convert it to lowercase to make the comparison case-insensitive.
// We check if the lowercase version of the new username is included in the lowercase versions of the current usernames.
// If the new username is found in the current usernames, we print a message indicating that the username is not available. Otherwise, we print a message indicating that the username is available.



