// Program to find the longest word in a given sentence?

// step 1 : create one empty variable
// step 2 : create another veriable to story currect bigest value
// step 3 : and loop to find the largetset one
// step 4 : and update curent larget
// step 5 : finally return the largest one


// Step 1: Take a sentence
const sentence = "I love programming very much";

// Step 2: Create an empty variable to hold the longest word
let longest = "";

// Step 3: Split the sentence into words
const words = sentence.split(" ");  // ["I", "love", "programming", "very", "much"]

// Step 4: Loop through each word
for (let i = 0; i < words.length; i++) {
    // Step 5: Check if current word is longer than the previous longest
    if (words[i].length > longest.length) {
        longest = words[i]; // Step 6: Update the longest word
    }
}

// Step 7: Print the result
console.log("Longest word:", longest);
