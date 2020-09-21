// ***********EXERCISE 27 FUNCTION SCOPE******************++

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

function q1(expoX, expoY) {
  console.log(typeof expoX);
  console.log(typeof expoY);

  for (d = 1; d <= expoY; d++) {
    console.log(expoX ** d);
  }
}

q1(3, 5);
// number
// number
// 3
// 9
// 27
// 81
// 243

q1(2, 8);
// number
// number
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".

let favFr = ["apple", "grape", "orange", "berry"];

function printFavoriteFruit() {
  favFr = ["apple", "grape", "berry"];
  console.log(`My favourite fruit is ${favFr}`);
}

printFavoriteFruit(); // My favourite fruit is apple,grape,berry

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(first, second) {
  let result = first ** second;
  return result;
}

console.log(exponent(4, 4)); // 256

// console.log(result); // ReferenceError: result is not defined -
// doesn't work because result has been declared inside
// of a function which means inside local scope and therefore cannot be
// accessed in global scope.
