// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 

function exponetial1(num1,expo1) {
console.log(typeof (num1 ** expo1))
} 
exponetial1(3,5) //number

// After that, the function should print _y_ exponential values starting from _x_.


function exponetial2(x,y) {
  let result = 1;
        for(let i = 0 ; i < y; i++) {
            result *= x
            console.log(result);
        }
} 
exponetial2(3,5) // 3, 9, 27, 81, 243
exponetial2(2, 8) //2, 4, 8 ,16, 32, 64, 128, 256

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
let fruit = "Lemon"
function printFavoriteFruit() {
  fruit = "Kiwi"
  console.log(`My favorite fruit is ${fruit} `);
}
printFavoriteFruit(fruit)

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file. 
function exponent(num1, num2) {
  let result = 1;
  for (let i = 0; i < num2; i++) {
      result = result * num1;
      console.log(result);
      /*2 = 2^1
      4 = 2^2
      8 = 2^3
      16
      32
      64
      128
      256
      512
      1024 */
  }
  console.log(result);
} 
exponent(2, 10); // 1024 = 2^10
//console.log(result);// result is located inside the local scope, for that reason when it is log, it get an error message. //result is not defined


//REVISION
//Alguns links que possam ser úteis no futuro
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php //divisão e multiplicação.


let result2 = 1;
function exponent2(num1, num2) {
  for (let i = 0; i < num2; i++) {
    num1 = i;
    result2 = Math.pow(num1, num2);
    console.log(result2);
  } 
}
  exponent2(2,5); 
/*
1=1^5
32 = 2^5
243 = 3^5
1024 = 4^5 */