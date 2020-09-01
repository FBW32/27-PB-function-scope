/* 1. 

Print Exponential Values
Write a function that accepts two numbers and validate that they are numbers.
After that, the function should print y exponential values starting from x.

For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2. */

function ExponentialValues(x, y) {
  if (typeof (x && y)) {
    console.log(`${x} and ${y} are numbers `); // 3 and 5 are numbers
  }
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
    console.log(result);
  }
}
ExponentialValues(3, 5); // 3 9 27 81 243
ExponentialValues(2, 8); // 2 4 8 16 32 64 128 256

/* 2;

Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x". */

let favFruits = "Mango, banana, apple";
console.log(favFruits); // Mango, banana, apple
function printFavoriteFruit(params) {
  favFruits = "Melon, kiwi";
  console.log(`My favorite fruit is: ${favFruits}`);
}
printFavoriteFruit(); // My favorite fruit is: Melon, kiwi

/* 3. 

Multiply a Number by Itself
Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file */

function exponent(num1, num2) {
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
    console.log(result);
  }
}
exponent(2, 3);
let xx = 22;
let new = result;
console.log(new);  // SyntaxError: Unexpected token 'new' ==> it doasn't recognize variable 'result'.
