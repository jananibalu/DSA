// Program to find the max count of consecutive 1’s in an array

// Step 1: Create the input array
const arr = [1, 1, 0, 1, 1, 1, 0, 1];

// Step 2: Create a variable to store the highest count of continuous 1's
let maxCount = 0;

// Step 3: Create another variable to store current streak of 1's
let currentCount = 0;

// Step 4: Loop through the array one by one
for (let i = 0; i < arr.length; i++) {

    // Step 5: If the current element is 1, increase currentCount
    if (arr[i] === 1) {
        currentCount++; // increase streak

        // Step 6: If currentCount is greater than maxCount, update it
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
    }
    // Step 7: If the current element is 0, reset currentCount to 0
    else {
        currentCount = 0;
    }
}

// Step 8: Print the final max count of continuous 1's
console.log("Max consecutive 1s:", maxCount);
