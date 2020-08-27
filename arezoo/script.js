//1
function validateNumber(number1, number2) {
  let expotential;
  let result = "";
  if (typeof number1 == "number" && typeof number2 == "number") {
    console.log(true);
  } else {
    console.log(false);
  }

  for (let i = 1; i <= number2; i++) {
    expotential = number1 ** i;
    result += expotential + " ";
  }
  console.log(result);
}

validateNumber(3, 5);
validateNumber(2, 8);

//2

let myFruit = "melon";
function printFavoriteFruit() {
  let myFruit = "apple";
  console.log(`my favorite fruit is : ${myFruit}`);
}
printFavoriteFruit();

//3

function exponent(numnber1, number2) {
  let result;
  let expotential = "";
  for (let i = 1; i <= number2; i++) {
    result = numnber1 ** i;
    expotential += result + " ";
  }
  console.log(expotential);
}
exponent(2, 4);
//3.2
// console.log(result); result is not defined
// result is a local variable
