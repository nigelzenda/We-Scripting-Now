function rectangleArea (width, height){
    let area = width * height; // we have declared this statement hence it will need to be returned or captured
    return area; // capturing the outcome of function rectangleArea
}
console.log(rectangleArea(5,3)); //result

///////////////////////////////////////////////////////////////////////////////////////////

let num = 50; //Let num be 50.. meaning this can be reassigned anywhere. however this has been declared globally.

const logNum = () => {
  num = 100; // Take note of this line of code // not favourable however this overwrites 50 to become 100 because var or just defining it as num does not respect block scope. hence it will overidde global and local variables. // never use this. Use Let or Use Const, they respect block code.
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/* Lets do this again with let and const */
let num1 = 55;
const logNum1 = () =>{
  let num1 = 21;
  console.log(num1)
}
logNum1();// prints 21 defined within the block of code
console.log(num1); // prints 55 defined globally

///////////////////////////////////////////////////////////////////////////////////

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};
logSkyColor();
//console.log(color); // throws a ReferenceError

