console.log('This is')
console.log('the'+' '+'begining.')


// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());
var favouriteFood = 'pizza';
var numOfSlices = 8;
console.log(favouriteFood);
console.log(numOfSlices);


// Testing the 'let' keyword to see if it allowed assigned varriables to change
let changeMe = true; // set the initial value to true. If I log changeMe to console the output will be 'true'
changeMe = false; // changing the value to false
console.log(changeMe); //logging new value of changeMe to show if its now 'true'

// Testing 'const' to see if it trully doesnt allow values to change
const surname = 'Zenda';
console.log(surname);
//now lets reassign this and see what the output will be
/*surname = 'Chitakunye';*/ // after running this indeed it shows an error that you cannot assign a value to a constant variable


//Now lets test and learn the Mathematical operands
let levelUp = 10;
console.log('Initially, levelup is:', levelUp) // This is the innitial assigned value.
levelUp += 5;
console.log('The value of levelUp is now:', levelUp); // These console.log() statements below will help you check the values of the variables.
let powerLevel = 9001;
console.log('Initially, powerLevel is: ', powerLevel) // This is the innitial assigned value.
powerLevel -= 100;
console.log('The value of powerLevel is now:', powerLevel); // These console.log() statements below will help you check the values of the variables.
let multiplyMe = 32;
console.log('Initially, multiplyMe is: ', multiplyMe) // This is the innitial assigned value.
multiplyMe *= 11;
console.log('The value of multiplyMe is now:', multiplyMe); // These console.log() statements below will help you check the values of the variables.
let quarterMe = 1152;
console.log('Initially, quarterMe is: ', quarterMe) // This is the innitial assigned value.
quarterMe /= 4;
console.log('The value of quarterMe is now:', quarterMe); // These console.log() statements below will help you check the values of the variables.


let a = 12;
++a;  // adds 1 to a and that is the new assigned value of a.
console.log(a); // Output: 13

let x = 5;
let y = ++x; // x is incremented first, then y is assigned the incremented value of x, x+1 = 6 first then y = 6 the increment. It doesn’t matter on which side of the ‘=’ it is
console.log(x); // Output: 6
console.log(y); // Output: 6


let v = 10;
v++;  // adds 1 so a is incremented a value of 1 to make it 10
console.log(v); // Output: 11



//How about decrements
let b = 20;
b--;  // subtracts 1
console.log(b); // Output: 19

let t = 5;
let q = t++; // y is assigned the current value of x, then x is incremented or y is equal to x then x is incremented by 1
console.log(t); // Output: 6
console.log(q); // Output: 5


//Testing concantenation of strings and values
let favouriteAnimal = 'tiger';
console.log('My favourite animal: '+ favouriteAnimal);