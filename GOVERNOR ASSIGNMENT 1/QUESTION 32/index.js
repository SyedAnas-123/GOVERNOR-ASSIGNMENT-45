var current_users = ["alice", "bob", "charlie", "david", "emily"];
var new_users = ["emily", "frank", "george", "harry", "alice"];
var _loop_1 = function (new_username) {
    var lower_new_username = new_username.toLowerCase();
    var usernameExists = current_users.some(function (user) { return user.toLowerCase() === lower_new_username; });
    if (usernameExists) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
// n this program:
// We have two arrays: current_users containing existing usernames and new_users containing new usernames.
// We loop through the new_users array, and for each username, we convert it to lowercase to make the comparison case-insensitive.
// We check if the lowercase version of the new username is included in the lowercase versions of the current usernames.
// If the new username is found in the current usernames, we print a message indicating that the username is not available. Otherwise, we print a message indicating that the username is available.
