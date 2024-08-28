// Understanding Nested Loops
// Nested loops are loops within loops. The inner loop completes all its iterations for every single iteration of the outer loop. This concept is commonly used for tasks that require repeated action over multiple dimensions (e.g., processing data in a matrix or generating patterns).

// Examples of Nested Loops
// Grandfather and Sam Collecting Apples

// *****************************************************************************

// for (let grandfather = 0; grandfather < 4; grandfather++) {
//     for (let sam = 0; sam < 4; sam++) {
//         console.log("Collected apple from row", grandfather, "column", sam);
//     }
// }




// Outer Loop (grandfather): Runs from 0 to 3.
// Inner Loop (sam): Runs from 0 to 3 for each iteration of the outer loop.
// Output: Each combination of grandfather and sam coordinates.


// *****************************************************************************

//  2 Family Eating Gol Gappas


// for (let family = 1; family <= 5; family++) {
//     for (let gappas = 1; gappas <= 4; gappas++) {
//         console.log("family", family, "ate", gappas, "Gol gappa");
//     }
// }



// Outer Loop (family): Runs from 1 to 5.
// Inner Loop (gappas): Runs from 1 to 4 for each iteration of the outer loop.
// Output: Each family member eating up to 4 Gol gappas.


// *****************************************************************************

// Pattern Printing
// Rectangular Pattern

// for (let i = 0; i < 5; i++) {
//     let bag = "";
//     for (let j = 0; j < 10; j++) {
//         bag += "* ";
//     }
//     console.log(bag);
// }


// Outer Loop (i): Runs 5 times.
// Inner Loop (j): Runs 10 times each iteration of the outer loop.
// Output: Prints a rectangle of stars (5 rows by 10 stars per row).


// *****************************************************************************



// Right-Angled Triangle Pattern


// for (let i = 1; i <= 5; i++) {
//     let bag = "";
//     for (let j = 1; j <= i; j++) {
//         bag += "* ";
//     }
//     console.log(bag);
// }

// Outer Loop (i): Runs from 1 to 5.
// Inner Loop (j): Runs up to the current value of i.
// Output: Prints a right-angled triangle of stars.

// *****************************************************************************


// Number Pattern Triangle


// for (let i = 1; i <= 5; i++) {
//     let bag = "";
//     for (let j = 1; j <= i; j++) {
//         bag += j + " ";
//     }
//     console.log(bag);
// }


// Outer Loop (i): Runs from 1 to 5.
// Inner Loop (j): Runs up to the current value of i.
// Output: Prints a right-angled triangle with increasing numbers.

// ********************************************************************************

// Inverted Right-Angled Triangle

// for (let i = 5; i >= 1; i--) {
//     let bag = "";
//     for (let j = 1; j <= i; j++) {
//         bag += "* ";
//     }
//     console.log(bag);
// }



// Outer Loop (i): Runs from 5 to 1.
// Inner Loop (j): Runs up to the current value of i.
// Output: Prints an inverted right-angled triangle of stars.

// ********************************************************************************

// Control Statements in Nested Loops


// for (let sultan = 1; sultan <= 10; sultan++) {
//     for (let bahubali = 1; bahubali <= 10; bahubali++) {
//         if (sultan < bahubali) {
//             break;
//         }
//         console.log(sultan, bahubali);
//     }
// }


// Behavior: Exits the inner loop when sultan is less than bahubali.





// ********************************************************************************

// Continue Statement


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i === j) {
//             continue;
//         }
//         console.log("Grandpa:", i, "Sam:", j);
//     }
// }




// Behavior: Skips the current iteration of the inner loop when i equals j.
// By using nested loops, you can perform complex iterations and manage multi-dimensional data effectively. 
// These examples provide a strong foundation for understanding how nested loops work and 
// how they can be applied to various programming tasks.


// for (let i = 1; i <= 5; i++) {
//     let bag = "";
//     for (let j = 1; j <= i; j++) {
//         bag += j + " ";
//     }
//     console.log(bag);
// }

// --------------------------------------------------------------------------------


// let num = 5;

// for( let i = 1; i <=num; i++){
//     let bag = ""
//     for( let j = 1; j <=num; j++){
//      bag += j + " "
//     }
//     console.log(bag)
    
// }

// let num = 5;

// for( let i = 1; i <=num; i++){
//     let bag = ""
//     for( let j = 1; j <=num; j++){
//      bag += i + " "
//     }
//     console.log(bag)
    
// }

// 1 2 3
// 4 5 6
// 7 8 9


// let num =9;
// let bag = ""
// for( let i = 1; i<=9; i++){
//     if(i % 3==0){
//      bag +=i +" "
//     }
//     console.log(bag)
// }


// let num = 4;
// for( let i = 0; i < 4; i++){
//     let bag = " "
//     for(let j = 0; j<=i; j++){
//         bag +=  "* "
//     }
//     console.log(bag)
// }



// for(let i =5; i >0; i--){
//     let bag = ""
//     for(let j =0; j<i; j++){
//         bag += "*"
//     }
//     console.log(bag)
// }
// *********************************************************************

// for(let i =0; i<5; i++){
//     let bag = ""
//     for(let j = 0; j<5; j++){
//       if( j==0 || j==4 || i==4 ){
//         bag += "* "
//       }else{
//         console.log("  ")
//       }
//       console.log(bag)
//     }
   
// }

// *********************************************************************

// let num = 5;
// for(let i =0; i< num; i++){
//   let bag = ""
//   for(let j = 0; j<num; j++){
//     if(i=== num-1 || j=== 0 || j=== num-1 || i===0){
//       bag += "* ";
//     }
//     else{
//       bag += "  ";
//     }
//   }console.log(bag)
// }


// *****
// *   *
// *   *
// *   *
// *****


// *****************************************************************

// let num = 20;
// for(let i = 0; i<num; i++){
//   let bag ="";
//   for(let j = 0; j<num; j++){
//     if(j === 0|| j===num-1 || i=== num -1){
//       bag += "* "
//     }else{
//       bag += "  "
//     }
//   }console.log(bag)
// }




// *****************************************************************

// let count = 1;
// for(let i =1; i<=3; i++){
//   let bag = " ";
//   for(let j = 1; j <=3; j++){
//    bag += count + " ";
//    count = count+1
//   }
//   console.log(bag)
// }

// output == 1 2 3
//           4 5 6
//           7 8 9


// ==================================================


// let leapYears = "";

// for (let year = 2000; year <= 2025; year++) {
//   // A year is a leap year if:
//   // 1. It is divisible by 4 AND (not divisible by 100 OR divisible by 400)
//   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     leapYears += year + " "; // Add the leap year to the string
//   }
// }

// console.log(leapYears);



// function leapYear(M,N){
//     //write your code here
//     let bag = ""
//     for(let i = M; i<=N; i++){
//       if( i %4 ==0 && ( i % 100 !==0 || i % 400 ===0)){
//          bag +=i + " "
//       }
//     }console.log(bag)
//   }