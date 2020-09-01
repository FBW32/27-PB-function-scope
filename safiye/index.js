//#### 1. Print Exponential Values
function getExponent(num, howmany) {
  if (typeof num == "number" && typeof howmany == "number") {
    output = "";
    for (let i = 1; i <= howmany; i++) {
      output = output + Math.pow(num, i) + " ";
    }
    console.log(output);
  } else {
    console.log("Minimum one of your answers is not a number");
  }
}
getExponent("a string", 8);

//#### 2. Fruits
let favoriteFruit = "Banana";
function printFavoriteFruit(favoriteFruit) {
  favoriteFruit = "Strawberry";
  console.log("My favorite fruit is: " + favoriteFruit + ".");
}
printFavoriteFruit();

//#### 3. Multiply a Number by Itself
function exponent(num, howmany) {
  let result = Math.pow(num, howmany);
  console.log(result);
}
exponent(2, 3);
//console.log(result);//ReferenceError: result is not defined
//result is a local variable which is defined in a function and you can call it only in this function.
