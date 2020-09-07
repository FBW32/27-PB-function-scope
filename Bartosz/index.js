// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers. 
// After that, the function should print _y_ exponential values starting from _x_.
// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

function expValue(x,y){
    let result = [];
    let start = 1;

    

    if(typeof x === 'number' && typeof y === 'number'){
        console.log('true');
    }else{
        console.log('false');
    }

    for (let i = 1; i <= y; i++){
        start *= x;
        result += start + ' ';
    }
    console.log(result);
    
   
}

expValue(3,5); // 3 9 27 81 243 
expValue(5,6)  // 5 25 125 625 3125 15625 




// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
let fruit = 'Cherry';
function printFavoriteFruit(){
    let fruit = 'Plum';
    console.log(`My favorite fruit is a: ${fruit}`);
}

printFavoriteFruit() // My favorite fruit is a: Plum

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(number1,number2){
    let result = 1;
    for(i = 0; i < number2; i++){
        result *= number1
    }
    console.log(result);
}


// console.log(result); // result is not defined outside of the 'exponent' function

exponent(4,3) // 64