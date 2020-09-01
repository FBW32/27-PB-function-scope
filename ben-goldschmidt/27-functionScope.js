// Function Scope
console.log("")
console.log("QUESTION 1: EXPONENTIAL VALUES")
// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

// ATTEMPT 1
// function expoValues1(x, y) {
//     let finalNumber1 = "";
//     for (let i = 1; i <= y;  *= x) {
//         finalNumber1 *= i + "";
//         console.log(finalNumber1)
//     }
// };
// expoValues1(3, 5);


// ATTEMPT 2
function expoValues1(x, y) {
    let axis = 1; // starting number declaration
    let result1 = ""; // string declaration
    for (let i = 1; i <= y; i++) {
        axis = axis * x; // calculation of the x-axis
        result1 += axis + " "; // to diplay all results in one horizontal line
    }
    console.log(result1); // log/print the values
};
expoValues1(3, 5);
expoValues1(2, 8);



// console.log("")
// console.log("QUESTION 2: FRUITS")
// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let favFruit = "Kiwi";
function printFavoriteFruit() {
    favFruit = "Watermelon";
    console.log("My favourite fruit is " + favFruit)
}
printFavoriteFruit();
// My favourite fruit is Watermelon


console.log("")
console.log("QUESTION 3: MULTIPLY NUMBER BY SELF")
// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function multiplyByItself(num1, num2) {
    multiplyTotal = num1 ** num2
    console.log(multiplyTotal)
}
multiplyByItself(2, 3);

let resultMulti = multiplyTotal;
console.log("The result should be " + resultMulti);

// It is possible,
// this is due to the function calling the result on line 60, 
// thus it is pulled out to the global scope.