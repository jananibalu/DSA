// Program to find Reverse of a string without using built-in method?

// Step 1: Create a variable to store the reversed value
// Step 2: Loop from the end of the string to the beginning
// Step 3: Add each character to the reversed variable
// Step 4: At the end, return or print the reversed string

// Step 1: Word to reverse
const originalWord = "hello";

// Step 2: Empty string to hold reversed word
let reversed = "";

// Step 3: Loop from last letter to first
for (let i = originalWord.length - 1; i >= 0; i--) {
    reversed += originalWord[i]; // add each letter at the end
}

// Step 4: Print result
console.log("Reversed word:", reversed);
