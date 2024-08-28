

// Introduction to Arrays
// Arrays are a data structure in JavaScript used to store multiple values in a single variable.
//  Arrays can hold multiple data types and are zero-indexed, meaning the first element is at index 0.


// Example 1: Age of Friends
// Instead of declaring multiple variables:

// let friend1_age = 21;
// let friend2_age = 20;
// let friend3_age = 25;
// let friend4_age = 21;
// let friend5_age = 20;
// let friend6_age = 28;
// let friend7_age = 24;

// Use an array:

// let friends_age = [21, 20, 25, 21, 20, 28, 24];


// ********************************************************************************


// Example 2: Names of Items
// Instead of multiple variables:

// let item1_name = "apple";
// let item2_name = "orange";
// let item3_name = "lichi";
// let item4_name = "banana";
// let item5_name = "grape";
// let item6_name = "mango";
// let item7_name = "pineapple";
// let item8_name = "strawberry";


// Use an array:

// let items_name = ["apple", "orange", "lichi", "banana", "grape", "mango", "pineapple", "strawberry"];


// ********************************************************************************

// Creating Arrays
// You can create arrays to store various types of data:

// let todo = ["Morning scrum", "DSA Session", "csbt comm session", "coding session", "Daily Standup"];
// let evaluation_scores = [9, 8, 7.5, 9.3];
// let mylist = ["Hello", 12, true, 3.14];

// console.log(todo);
// console.log(evaluation_scores);
// console.log(mylist);


// ********************************************************************************

// Accessing Array Elements
// Access elements using their index:

// let names = ["Pablo", "Chunnu", "Munnu", "Samosa"];

// console.log(names[1]); // "Chunnu"
// console.log(names[0]); // "Pablo"
// console.log(names[2]); // "Munnu"
// console.log(names[4]); // undefined (out of bounds)



// ********************************************************************************


// Nested Arrays
// Access elements of nested arrays:

// let list = [1, "masai", 3.41, [1, 2, 3], false];
// console.log(list[3]); // [1, 2, 3]
// console.log(list[3][1]); // 2



// ********************************************************************************


// Finding the Length of an Array
// Use the .length property:

// let shoppingList = ["Potato", "Rice", "Tomato", "Masala"];
// console.log(shoppingList.length); // 4

// let lastIndex = shoppingList.length - 1;
// console.log(shoppingList[lastIndex]); // "Masala


// ********************************************************************************



// Operations on Arrays
// Adding Elements
// Use the push method to append elements:

// let brands = [];
// brands.push("Apple");
// brands.push("Oppo");
// // ...
// console.log(brands);

// ********************************************************************************

// Replacing Elements
// Directly assign new values to specific indices:

// let numbers = [1, 2, 3, 4, 5];
// numbers[0] = 10;
// numbers[3] = -15;
// console.log(numbers); // [10, 2, 3, -15, 5]



// ********************************************************************************



// Removing Elements
// Use the pop method to remove the last element:

// let nums1 = [1, 2, 3, 4, 5];
// nums1.pop();
// nums1.pop();
// nums1.pop();
// nums1.push(10);
// console.log(nums1); // [1, 2, 10]

// ********************************************************************************


// Looping Through Arrays
// Basic Looping
// Print all elements using a for loop:

// let heros = ["bat-man", "super-man", "iron-man"];
// for (let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// }


// ********************************************************************************


// For-Of Loop
// Simpler syntax to loop through array elements:

// let heros = ["hello","Dedicated","Daya Pal","Good"]
// for (let item of heros) {
//     console.log(item);
// }
// console.log(heros[2])


// ********************************************************************************



// Reverse Loop
// Loop through the array in reverse:

// for (let i = heros.length - 1; i >= 0; i--) {
//     console.log(heros[i]);
// }

// for (let item of heros.reverse()) {
//     console.log(item);
// }


// ********************************************************************************


// Practical Examples
// Matching Categories with Names
// let category = ["movie", "cartoon", "Show", "funny"];
// let showNames = ["iron man", "Doremon", "Shark Tank", "Mr.Bean"];

// for (let i = 0; i < category.length; i++) {
//     console.log(category[i], "=", showNames[i]);
// }


// Calculating Sum and Average
// let scores = [99, 87, 77, 95, 92];
// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }

// console.log("Sum:", sum);
// console.log("Average:", Math.floor(sum / scores.length));


// ********************************************************************************


// Finding the Maximum Value
// let max = scores[0];

// for (let i = 1; i < scores.length; i++) {
//     if (max < scores[i]) {
//         max = scores[i];
//     }
// }

// console.log(max);


// ********************************************************************************


// Printing Even Numbers
// Using different methods to print even numbers from an array:

// let numbers2 = [1, 2, 3, 4, 5];

// // Method 1
// for (let i of numbers2) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Method 2
// for (let i of numbers2) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

// Method 3

// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] % 2 === 0) {
//         console.log(numbers2[i]);
//     }
// }


// ********************************************************************************
