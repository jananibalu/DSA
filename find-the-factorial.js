// Program to find the factorial of a given number

// Step 1: Take an input number to find its factorial
const num = 5;

// Step 2: Create a variable to store the result (initially set to 1)
let factorial = 1;

// Step 3: Loop from 1 to that number (inclusive)
for (let i = 1; i <= num; i++) {

    // Step 4: Multiply each number with the result variable
    factorial = factorial * i;
}

// Step 5: Print the final result
console.log("Factorial of", num, "is:", factorial);
