// #### 1. Print Exponential Values
function expoFunction(x,y) {
    if (typeof x == 'number' && typeof y == 'number') { 
        let result = [];
        for(i= 1; i<=y; i++){
            let s= Math.pow(x,i);
            result.push(s);
        } return result.join(' ');
            } else {
                return " x , y should be numbers!"
    }
}
console.log(expoFunction(2,"m")); //  x , y should be numbers!
console.log(expoFunction(2,8));   // 2 4 8 16 32 64 128 256

//---------------XXXXXX---------------
// #### 2. Fruits
let favorite = 'fruit 1';
function printFavoriteFruit() {
    favorite = 'fruit 2';
    return `my favorite fruit is: ${favorite}`;
}
console.log(printFavoriteFruit());  // my favorite fruit is: fruit 2

console.log(favorite); //  fruit 2

//---------------XXXXXX---------------
// #### 3. Multiply a Number by Itself
function exponent(x,y) {
    let result = Math.pow(x,y);
    return result;
}
console.log(exponent(2,3));  // 8
console.log(result); //  ReferenceError: result is not defined
// its impossible to access variable "result" because it was declared within the function's scope, and its unreachable form outside this scope