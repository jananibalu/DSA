// How to check whether a string is palindrome or not?

// Step 1: Create a variable to store the reversed word
// Step 2: Loop from the end of the word to the beginning
// Step 3: Build the reversed word by adding each letter
// Step 4: Compare original word and reversed word
// Step 5: If they are the same, return true — it's a palindrome
// Step 6: Otherwise, return false — not a palindrome

// Step 1: Take a word
const word = "madam";

// Step 2: Create an empty string to hold the reversed word
let reversed = "";

// Step 3: Loop from end of word to start, and build reversed word
for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

// Step 4: Check if reversed word and original word are same
if (reversed === word) {
    console.log("true");  // It's a palindrome
} else {
    console.log("false"); // Not a palindrome
}
