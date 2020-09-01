 //#### 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers. 
//After that, the function should print _y_ exponential values starting from _x_.
// For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
//function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
 

 function exponentialValue(numVal, numExp) {

       if ((typeof (numVal) === 'number') && (typeof (numExp) === 'number')){
           console.log(true ,"its a number");
       } else {
           console.log(false, "its not a number");
       }
      
       let expOut = " ";
       let incNum = 1;

       for (let i = 1; i <= numExp; i++){

         incNum = incNum * numVal;

            expOut += incNum + " ";
        }
        
      console.log(expOut);
    }  

    exponentialValue(3, 6) // 3 9 27 81 243 729
 
    // 2. Fruits
    // Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 


    let myFruit = "mango"

    function printFavoriteFruit() {

         x = myFruit;

         console.log("my favorite fruit is:", x);
    } 

    printFavoriteFruit(); // my favorite fruit is: mango

    // #### 3. Multiply a Number by Itself
// Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(numPar1, numPar2) {

    let result = " ";
    let numAdd = 1;

    for (let i = 1; i <= numPar2; i++){

      numAdd = numAdd + (numPar1 ** numPar2);

        result += numAdd + " ";
     }
     
 }  console.log(result);

 exponentialValue(4, 5)   // ReferenceError: result is not defined because the variables are define within the local scope so console.log result need to be within the same local scope where it should initialize the variables.
