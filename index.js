"use strict";
// Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
let magicain = ["Harry Potter", "Hermione Granger", "Ron weasley", "Albus Dumbledore"];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicain);
