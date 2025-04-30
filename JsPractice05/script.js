/*

5. Rotate String 'w3resource' Periodically

Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

*/


let word = "w3resource";

for (i = 0; word.length > i; i++){
    word = word.slice(-1)+ word.slice(0, -1) 
    console.log(word);

}
/* for infinite loop */
// let word = "w3resource";
// let original = word; // Save the original string

// let rotationCount = 0;
// let maxRotations = word.length; // Set the max number of rotations (same as the length of the string)

// let interval = setInterval(() => {
//     // Rotate the string by moving the last character to the front
//     word = word.slice(-1) + word.slice(0, -1);
//     console.log(word);

//     rotationCount++;

//     // If the string has rotated full cycle (word.length times), reset
//     if (rotationCount === maxRotations) {
//         console.log("Resetting to original string...");
//         word = original; // Reset the word to the original
//         rotationCount = 0; // Reset the counter
//     }
// }, 1000); // Rotate every 1 second


