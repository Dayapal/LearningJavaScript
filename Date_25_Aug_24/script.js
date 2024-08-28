
// function array(num1,num2){

// }
// let N = 3
// for (let i=0; i<N; i++){
//     let bg = ""
//     for(let j=0; j<N; j++){
//         if( i==0 || i==N-1 || j==0|| j==N-1){
//             bg += "* " 
//         }else{
//             bg += "  "

//         }
//     }console.log(bg)
// }


// 1. *Create a 2D Array and Print it:*
//    - *Problem:* Write a function that creates a 2D array of size m x n and prints it.
//    - *Explanation:* You'll learn how to initialize a 2D array and access elements.
//    - *Dry Run:* We will discuss how each element in the 2D array is accessed.

// function createAndPrint2DArray(m, n) {
//     // Step 1: Create the 2D array
//     let array = [];
//     for (let i = 0; i < m; i++) {
//         let row = [];  // Create an empty row
//         for (let j = 0; j < n; j++) {
//             row.push(i * n + j); // Add values to the row
//         }
//         array.push(row); // Add the row to the 2D array
//     }

//     // Step 2: Print the 2D array
//     // for (let i = 0; i < m; i++) {
//     //     console.log(array[i].join(" ")); // Print each row
//     console.log(array)
//     }
// // }

// Example usage:
// createAndPrint2DArray(4, 4);

// ==================================================================================

// function sumOfElements(array) {
//     let sum = 0; // Step 1: Initialize sum

//     // Step 2: Iterate through the 2D array
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             sum += array[i][j]; // Step 3: Add each element to the sum
//         }
//     }

//     return sum; // Step 4: Return the final sum
// }

// // Example usage:
// let array = [
//     [1, 2, 3],
//     [4, 50, 6],
//     [7, 8, 9]
// ];
// console.log(sumOfElements(array)); // Output: 45


// ==================================================================================

//  Question 1. How to find Duplicate elements in a given Array

const arrNumber = [1,2,3,4,5,2,3,9,8]
const duplicates = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicates)
