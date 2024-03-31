function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call the function to modify the array of magician's names
make_great(magician_names);
// Call show_magicians() to see that the list has actually been modified
show_magicians(magician_names);
