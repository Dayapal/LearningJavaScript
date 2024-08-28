// let age = 6;

// if (age === 7) {
//   console.log("You're 7 years old!");
// } else {
//   console.log("You're not 7 years old.");
// }

// let passingMarks = 50;
// let reexam = 33;
// let marks = 22;
// if(marks >= passingMarks){
//   console.log("You pass the exam")
// }else if (marks <= 33){
//   console.log("You need to prepare again for the exam")
// }else{
//   console.log("Hey you pass the exam now you are a grudaute student")
// }
// *************************************************************************************

/*
 6. What are Logical Operators?
 Logical operators allow you to combine multiple conditions. Here are the main ones:

 && (AND) checks if both conditions are true.
 || (OR) checks if at least one condition is true.
  // ! (NOT) flips true to false, and false to true.

*/

// let skills = true;
// let gruduate = true;
// if ( skills === true && gruduate === true){
//   console.log("You will be the job ")
// } else{
//   console.log("You will not get the job easily")
// }

// ************************************************************************************



// let DOB = "12 December 2001";
// let panNumber = "PNMC11123C";
// if(DOB === "12 December 20021" || panNumber === "PNMD22023"){
//   console.log("Congratulation we will provide you informaitoin.")
// }else{
//   console.log("Sorry we can't provide you informaiton please call us back with the right information.")
// }


// ************************************************************************************


// let mpin = 2023;
// if(mpin !== "2023"){
//   console.log(" mpin is not correct")
// }else{
//   console.log("mpin is correct")
// }


// let isHappy = true;

// if (!isHappy) {
//   console.log("You are not happy!");
// } else {
//   console.log("You are happy!");
// }


// 7. Nesting if Statements
// You can put if statements inside other if statements to check more conditions.
// let age = 73;
// let likesIceCream = false;

// if (age === 7) {
//   if (likesIceCream) {
//     console.log("You're 7 years old and you like ice cream!");
//   } else if(age === 7){
//     console.log("You are 7 yers old but you don't like ice cream")
//   } 
// } else{
//   console.log("You are not 7 years old and you also do not like ice cream")
// }

// *************************************************************************************
/*
8. Combining Comparison and Logical Operators
You can combine comparison and logical operators to make more complex conditions.

let marksOf10th = 55;
let marksOf12th = 45;
if( marksOf10th >= 50 && marksOf12th >= 50){
  console.log("you are eligible for the exam")
} console.log("you are not  eligible for the exam")

*/

// *************************************************************************************
// 9. Understanding Truthy and Falsy Values
// In JavaScript, some values are considered "truthy" (like true) and others are "falsy" (like false). 
// Some examples of falsy values are 0, 
// null, undefined, NaN, and an empty string "".


// let name = undefined;

// if (name) {
//   console.log("You have a name!");
// } else {
//   console.log("You don't have a name.");
// }


// *************************************************************************************

// 10. Ternary Operator
// The ternary operator is a shorthand way of writing an if...else statement. It uses ? and :.

// let age = 27;

// let message = age === 7 ? "You're 7 years old!" : "You're not 7 years old.";
// console.log(message);


// *************************************************************************************


// 11. Checking Multiple Conditions
// You can use multiple logical operators to check several conditions at once.
// let age = 7;
// let height = 120;
// let weight = 30;

// if (age === 7 && height === 120 && weight === 30) {
//   console.log("You're 7 years old, 120 cm tall, and weigh 30 kg!");
// }

// ***********************************************************************************************

// 12. Using switch Statements
// The switch statement is another way to handle multiple conditions, 
// especially when you have a lot of else if statements.

// let day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("It's Monday!");
//     break;
//   case "Tuesday":
//     console.log("It's Tuesday!");
//     break;
//   default:
//     console.log("It's some other day.");
// }


// ***********************************************************************************************

// 13. When to Use switch vs if-else
// Use switch when you have a single value to check against multiple cases. 
// Use if-else for more complex conditions.

// let fruit = "banana";

// switch (fruit) {
//   case "apple":
//     console.log("You chose an apple!");
//     break;
//   case "banana":
//     console.log("You chose a banana!");
//     break;
//   default:
//     console.log("You chose something else.");
// }


// ***********************************************************************************************

// 14. Short-Circuit Evaluation
// In JavaScript, logical operators && and || use "short-circuit" evaluation. 
// This means they stop evaluating as soon as they find a result.

// let isSunny = true;
// let isWeekend = false;

// if (isSunny || isWeekend) {
//   console.log("You can go outside!");
// }



// ***********************************************************************************************


// 15. Using ! for Reversing Conditions
// You can use ! to reverse the condition.

// let isRaining = true;

// if (!isRaining) {
//   console.log("It's not raining, you can go outside!");
// }else{
//   console.log("It's raining, you can't go outside!");
// }


// ***********************************************************************************************


// 16. Handling Multiple else if Conditions
// You can chain multiple else if statements together to handle many different cases.

// let grade = "B";

// if (grade === "A") {
//   console.log("Excellent!");
// } else if (grade === "B") {
//   console.log("Good job!");
// } else if (grade === "C") {
//   console.log("You passed.");
// } else {
//   console.log("Better luck next time.");
// }


// ***********************************************************************************************



// 17. Using Conditions Inside Loops
// You can use conditions inside loops to repeat actions only when certain conditions are true.
/*
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    console.log("Three is special!");
  } if (i === 7){
    console.log("Eight is secial!");
  }else{
    console.log(i)
  }
}

  */

// ***********************************************************************************************


// 18. Combining switch and default
// The default case in a switch statement runs if no other case matches.

// let color = "blue";

// switch (color) {
//   case "red":
//     console.log("You chose red.");
//     break;
//   case "green":
//     console.log("You chose green.");
//     break;
//   default:
//     console.log("Color not recognized.");
// }



// ***********************************************************************************************

// 19. Using Conditions to Handle Errors
// You can use conditions to handle errors or unexpected values in your code.
// let number = 10;

// if (number > 0) {
//   console.log("Positive number.");
// } else if (number < 0) {
//   console.log("Negative number.");
// } else {
//   console.log("Number is zero.");
// }



// ***********************************************************************************************

// 20. Comparing Strings
// You can compare strings using comparison operators.
// let word = "apple";

// if (word === "apple") {
//   console.log("It's an apple!");
// }


// ***********************************************************************************************




// 21. Using Conditions with Arrays
// You can use conditions to check if a value exists in an array.

// let fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("Banana is in the list!");
// }



// ***********************************************************************************************


// 22. Conditional Statements with Objects
// You can also check conditions with objects.

// let person = { name: "Alice", age: 7 };

// if (person.age === 7) {
//   console.log(person.name + " is 7 years old!");
// }


// ***********************************************************************************************


// 23. Checking for Undefined Values
// You can check if a value is undefined using a condition.
// let number;

// if (number === undefined) {
//   console.log("The number is undefined.");
// }


// ***********************************************************************************************

// 24. Using || to Set Default Values
// You can use || to set default values if a variable is undefined or falsy.

// let name;

// console.log(name || "Guest");

// ***********************************************************************************************



