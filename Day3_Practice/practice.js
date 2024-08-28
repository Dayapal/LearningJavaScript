// Question 2: Use an if-else statement to check if a variable isRaining is true or false,
//  and print "Take an umbrella" if true, and "Enjoy your day" if false.
/*
let isRaining = false;
if(isRaining){
  console.log("Take an umbrella")
}else{
  console.log("Enjoy your day")
}

*/
// ****************************************************************************************


// Question 3: Write a condition using the || (OR) operator that checks if 
// a variable age is less than 18 or greater than 65, and print "Eligible for discount."
/*

let age = 23
if (age < 18 || age > 65){
  console.log("Eligible for discount")
}else{
  console.log("Not Eligible for discount")
}
  */


// ****************************************************************************************

// Question 4: Use the && (AND) operator to check if a variable temp is between
//  20 and 30 (inclusive). If true, print "Comfortable weather."

// let temperature = 93;
// if( temperature >=20 && temperature <=30){
//   console.log("Comfortable weather")
// }else{
//   console.log("Not comfortable weather")
// }


// ****************************************************************************************


// Question 5: Write a condition that checks if a string password is not equal to "12345", and
//  if so, print "Incorrect password."

// let password = "12345";
// if( password !== "12345" ){
//   console.log("Incorrect password")
// } else{
//   console.log("Password is correct")
// }


// ****************************************************************************************

// Question 6: Use a ternary operator to check if a number num is even or odd, and print "Even" or "Odd".

// let num = 21;
// let num1 = num%2==0?"Even number":"Odd Number";
// console.log(num1)


// ****************************************************************************************


// Intermediate Level:
// Question 11: Write a condition that checks if a variable price is between 50 and 100 (inclusive), or 
// if it's exactly 150. Print "Special offer!" if true.


// let price = 5;
// if((price >= 50 && price <=100) || price === 150){
//   console.log("Special offer!")
// } else{
//   console.log("you can purchase ")
// }


// ****************************************************************************************

// Question 12: Use nested if statements to check if a number n is positive and if it is even, 
// print "Positive even number."


// **********************************************************************


// let day = "Monday";
// let jump = 2;

// let current_day_num
// if( day == "Monday"){
//   current_day_num = 1
// }
// else if( day == "tuesday"){
//   current_day_num = 2
// }
// else if( day == "Wednesday"){
//   current_day_num = 3
// }
// else if( day == "thursday"){
//   current_day_num = 4
// }
// else if( day == "friday"){
//   current_day_num = 5
// }
// else if( day == "saturday"){
//   current_day_num = 6
// }
// else {
//   current_day_num = 7
// }

// let final_day_num = current_day_num + (jump % 7)

// if(final_day_num ==1){
//   console.log("Monday")
// }
// else if(final_day_num ==2){
//   console.log("Tuesday")
// }
// else if(final_day_num ==3){
//   console.log("Wednesday")
// }
// else if(final_day_num ==4){
//   console.log("Thursday")
// }
// else if(final_day_num ==5){
//   console.log("Friday")
// }
// else if(final_day_num ==6){
//   console.log("Saturday")
// }
// else if(final_day_num ==7){
//   console.log("Sunday")
// }



function dayOfTheWeek(day, N) {
  //write code here
let currentDay;
  if( day === "Monday"){
    currentDay = 1
  } 
  
  else if( day === "Tuesday"){
    currentDay = 2
  }
  
  else if( day === "Wednesday"){
    currentDay = 3
  }
  else if( day === "Thrusday"){
    currentDay = 4
  }
  else if( day === "Friday"){
    currentDay = 5
  }
  else if( day === "Saturday"){
    currentDay = 6
  }
  else if( day === "Sunday"){
    currentDay = 7
  }
  
let finalDay = (currentDay + (N % 7) - 1) % 7 + 1;

if( finalDay == 1){
  console.log("Monday")
}

else if( finalDay ==2){
  console.log("Tuesday")
}
else if( finalDay ==3){
  console.log("Wednesday")
}
else if( finalDay ==4){
  console.log("Thrusday")
}
else if( finalDay ==2){
  console.log("Friday")
}
else if( final ==2){
  console.log("Saturday")
}
else if( finalDay ==2){
  console.log("Sunday")
}

}
dayOfTheWeek("Wednesday", 5)








