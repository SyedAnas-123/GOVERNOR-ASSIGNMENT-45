function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function to create three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);




// In this function:

// We define a function make_album that takes three parameters: artist (string), title (string), and tracks (optional number).
// Inside the function, we create an object album containing artist and title properties.
// If the tracks parameter is provided, we add a tracks property to the object.
// We return the album object.
// We call the function make_album three times with different combinations of parameters and print the returned objects to show that album information is stored correctly.