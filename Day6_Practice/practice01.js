// let arr = [1,2,3,4]
// let bag = ""
// for(let i = arr.length; i >=1;i--){
//     bag += i +" "
    
// }
// console.log(bag)


// *********************************************************

// let n = 4; // Number of lines

// for (let i = n; i > 0; i--) {
//     let spaces = ' '.repeat(i * 2); // Create spaces
//     console.log('\\' + spaces + '/');
// }


// *********************************************************

// *********************************************************

// Number of lines in the pattern
// let n = 4;

// // Loop to print each line
// for (let i = 0; i < n; i++) {
//     let spacesBeforeSlash = ' '.repeat(i); // Spaces before the backslash
//     let spacesBetweenSlashes = ' '.repeat((n - i - 1) * 2); // Spaces between the slashes

//     // Print the line
//     console.log(spacesBeforeSlash + '\\' + spacesBetweenSlashes + '/');
// }


// let arr = [10,2,3,2]
// let min = arr[0]
// for (let i=)

// ********************************************************************

// function niceArray(N, array, K) {
//     //write code here
//     let dup = false
//     for(let i=0; i<=array.length;i++){
//       if(array[i] % 2===0){
//         if(array[i]<K){
//           console.log("Nice Array")
//           break;
//         }else {
//           console.log("Bad Array")
//           break;
//         }
//       }
//     }
//   }
  

// **************************************************************************************


function printPattern(N) {
    for (let i = 0; i <N; i++) {
        let line = '';
        // Create spaces before the backslash
        for (let j = 0; j < i; j++) {
            line += ' ';
        }
        // Add the backslash
        line += '\\';
        // Create spaces between the backslash and the forward slash
        for (let j = 0; j < (N - i - 1) * 2; j++) {
            line += ' ';
        }
        // Add the forward slash
        line += '/';
        // Print the line
        console.log(line);
    }
}
// Call the function to print the pattern
printPattern(5);


// *********************************************************************************


// let n = 4
// for(let i =1; i<=n; i++){
//     let bag =""
//     for(let j = n; j>=1; j--){
//         bag += i +" "
//     }
//     console.log(bag)
// }


// *********************************************************************************
