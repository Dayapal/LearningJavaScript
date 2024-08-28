// let Name = "Dedicated Daya Pal";
// console.log(Name)
// ********************************************************************************************
// 1.Basic Arithmetic: Write a function that takes two numbers and returns their product, sum, difference, and quotient.

// function basicArithmetic(a, b){
//     return (` sum ${a+b}  product ${a*b} power ${a**b} difference ${a-b} quotient ${a%b}`)

// }
// let sum = basicArithmetic(2,4)
// console.log(sum)
// *******************************************************************************************

// function checkOddEven(num){
//     if(num%2 ==0){
//         console.log( num ,"This is the Even number")
//     }else{
//         console.log(num, "This is the Odd number" )
//     }
// }
// let num2 = 39
// checkOddEven(num2)

// *******************************************************************************************

// function calculateSqureAndCube(Num3){
//     let square2 = Math.pow(Num3, 2)
//     let cube2 = Math.pow(Num3, 3)

//     let squareWithOperator = Num3 ** 2
//     let cubeWithOperator = Num3 ** 3

//     return{
//         square2 : square2,
//         cube2 : cube2,
//         squareWithOperator: squareWithOperator,
//         cubeWithOperator: cubeWithOperator
//     }
// }

// let answer = calculateSqureAndCube(5)
// console.log(answer)

// *******************************************************************************************

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function checkOddeven(){
//     readline.question("Enter a number", (input) =>{
//         const number = parseInt(input)

//         if(isNaN(number)){
//             console.log("This is not a valid number")
//         }else if ( number % 2 == 0){
//             console.log("This is the Even number")
//         }else{
//             console.log("This is the Odd number")
//         }
//         readline.close();
//     })
// }

// checkOddeven();

// *******************************************************************************************

// Increment/Decrement: Write a function that takes a number, increments it by 1, then decrements it by 2, and returns the final result.

// function incrementDecrement(num4){
//     let answer = num4+1
//     let finalresults = answer-2
//     return(finalresults)
// }
// let results = incrementDecrement(10)
// console.log(results)

// *******************************************************************************************

// function evaluteTheExpression(){

// }

// function greaterThanAndLessThan(a , b){
//     return (a > b)? "A is greater than b": " B is greater than A"
// }
// // let answer = (2 > 9) ? "A is greater than b": "No a is not greater b"
// // console.log(answer)

// let results2 = greaterThanAndLessThan(209,30)
// console.log(results2)

// function checkGreaterThanAndLessThan(a, b ){
//  if( a > b){
//     return "a is greater than b"
//  } else{
//     return " B is greater than A"
//  }
// }

// let helloDedicated = checkGreaterThanAndLessThan(29,34)
// console.log(helloDedicated)

// function orderOfOperations(){
//     let expression = 3 + 5 * 2 - 8 / 4;

// }

// let solution = 3+5*2-8/4;
// console.log(solution)


let a = [1,2,3,4,5];
let ans = [];

for(let i = 0; i< a.length+1; i++){
    if(a[i] <=  a[i+1]){
        ans.push(a[i])
    }
}
console.log(ans)

