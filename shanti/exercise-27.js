// Function Scope

/* 1. Write a function that accepts two numbers and validate that they are numbers.
    After that, the function should print y exponential values starting from x.
    For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
    function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2. 
*/
function function1(x, y) {
    let term = 1;
    let output = "";
    for (let i = 1; i <= y; i++) {
        
        term = term * x;
        output += term + " ";
    }
    console.log(output);
}function1(3, 5); // 3 9 27 81 243
function1(5, 6); // 5 25 125 625 3125 15625 

/* 2. Fruits
    Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
*/
let fruit = "Mango";
function printFavoriteFruit() {
    fruit = "Orange";
    console.log("My favorite fruit is " + fruit);
}printFavoriteFruit(); // My favorite fruit is Orange

/* 3. Multiply a Number by Itself
    Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
    Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
*/
function exponent(num1, num2) {
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result = result * num1;
    }
    console.log(result);
} //console.log(result); // This is not possible because we get ReferenceError: result is not defined
exponent(4, 5); // 1024
exponent(2, 4); // 16

