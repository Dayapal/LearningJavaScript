// What Are Loops?
// Loops are a way to repeat a block of code multiple times


// Types of Loops in JavaScript
// For Loop
// While Loop
// Do...While Loop
// 1. For Loop
// A for loop is used when you know how many times you want to repeat a block of code.

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
  
// ***********************************************************************

// 2. While Loop
// A while loop is used when you want to repeat a block of code as
//  long as a condition is true.


// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// ***********************************************************************


// 3. Do...While Loop
// A do...while loop is similar to a while loop, but it will always run at least once.

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);



// ***********************************************************************


// Write a for loop to sum the numbers from 1 to 100.

// let sum = 0 ;
// for(let i = 0; i <= 100; i++){
//     sum = sum+i;
    
// }
// console.log(sum)


// ***********************************************************************


// Nested Loops

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       console.log(i, j);
//     }
//   }


// ***********************************************************************

// Iterate Over an Array

// let fruits = ['apple', 'banana', 'cherry'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }



// ***********************************************************************

// For...In Loop Iterate over an Object


// let person = {name: 'John', age: 30, city: 'New York'};
// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// ***********************************************************************

// Iterate Over a String

// let str = 'hello';
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }


// ***********************************************************************


// let num = 2;
// for(let i = 1; ; i = i+num){
//     console.log(i)
// }
