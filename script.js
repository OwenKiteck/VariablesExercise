//  For a variable that won't change, use "const"

let num = 20;
console.log(num);

num = 15;
console.log(num);

num = num + 7
console.log(num);
// OR num += 7

num --;
console.log(num);

num = "This is not a number"
console.log(num);

let blank;
console.log(blank);

blank = null;
console.log(blank);

// BONUS
const quarter = 0.25;
const dime = 0.10;
const nickel = 0.05;
const penny = 0.01;

console.log(quarter + ", " + dime + ", " + nickel + ", " + penny);

let letters = "qwertyuiop";
console.log(letters[9]);
console.log(letters.slice(9));