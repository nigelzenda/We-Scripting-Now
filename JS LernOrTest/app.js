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
const surname1 = 'Zenda';
console.log(surname1);
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

/*Create a variable called myName and assign it your name.
Create a variable called myCity and assign it your favorite city’s name.
Then use a single template literal to interpolate my variables into the sentence "My name is NAME. My favorite city is CITY." 
Interpolate 
*/
const myName = 'Nigel';
const myCity = 'Purmerend';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`) //interpolation




/*Use console.log() to print the typeof newVariable.
Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.*/
let newVariable = 'Playing around with typeof.'; //Already given. Excercise starts from line below
console.log(typeof newVariable);
newVariable =1;
console.log(typeof newVariable);



// &&
let stopLight = 'green';
let pedestrians = 0;
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }

  if (stopLight !== 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }
  
 
  if (stopLight === 'red' && pedestrians === 5) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }


  ///
  let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8)
{
  console.log('time to sleep');}
  else{
    console.log('not bed time yet');
  }


  //How about we play with falsy and trully values
  let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}
// now if i change it to 0 signifying a value that has nothing
wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = 'This is a string';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}
// how about I add an empty value but still maintain it as a string
favoritePhrase = ''; /* Addition of an empty string */

if (favoritePhrase) {
  console.log("This string is not empty at all");
} else {
  console.log("This string now is empty.");
}


//Username existance

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

// If however a usernemr is added by another block of code and it is defined
let username1 = '';
let defaultName1;

username1 = 'Nigel'
if (username1) {
  defaultName1 = username1; // Prints: Nigel because the expression is trully
} else {
  defaultName1 = 'Stranger';
}
console.log(defaultName1); 

//Nice now lets short circuit this 
/* let username = '';
let defaultName;

if (userName) {
  defaultName = userName;
} else {
  defaultName = 'Stranger';
}*/

let userName = '';
defaultName = userName || 'Falsy Stranger'; // because  OR checks the left hand first it is going to assign userName to defaultName first
console.log(defaultName);

//same thing if the string had been assigned a value it would be
userName = 'ZendaN';
defaultName = userName || 'Stranger'; // OR is going to be true due to the trully value hence that will be executed
console.log(defaultName);

//Lets think of other scenarios
// Is it Morning Yet?
let surname = '';
mySurname = surname || 'No Surname Provided';
console.log(mySurname);

// If surname is defined
surname = 'Chitakunye';
mySurname = surname || 'No Surname Provided';
console.log(mySurname);

// Refactor the following block of code into Tenery Operators
/*
let isLocked = !true;
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrases = 'Love That!';
if (favoritePhrases === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/

let isLocked = !true;
isLocked? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrases = 'Love That!';
favoritePhrases === 'Love That!'? console.log('I love that!'):console.log("I don't love that!");


// Lets add a code that checks to see if its summer
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
}else if(season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

