// Write a program to remove duplicates from an array

// Step 1: Create an empty array to store unique values
// Step 2: Loop through the original array (one by one)
// Step 3: For each number, check if it's already in the unique array
// Step 4: If not there, add it to the unique array
// Step 5: At the end, return the unique array


// Step 1: Take an array with some duplicate values
const numbers = [1, 2, 3, 2, 4, 3, 5];

// Step 2: Create an empty array to store unique values
let unique = [];

// Step 3: Loop through each item in the original array
for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;

    // Step 4: Check if the current number is already in the unique array
    for (let j = 0; j < unique.length; j++) {
        if (numbers[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }

    // Step 5: If it's not a duplicate, add it to the unique array
    if (!isDuplicate) {
        unique.push(numbers[i]);
    }
}

// Step 6: Print the final array without duplicates
console.log("Unique values:", unique);
