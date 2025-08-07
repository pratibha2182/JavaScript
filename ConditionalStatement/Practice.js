//Q1: Pass or Fail

/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num >= 50){
    console.log("Pass");
} else {
    console.log("Fail");
}
*/

//Q2: Check Positive or Negative
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num < 0){
    console.log("Negetive");
} else if (num <= 0){
    console.log("Zero");
} else {
    console.log("Positive");
}
*/

//Q3: Check if Number is 3-digit
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num >= 100 && num <= 999){
    console.log("It is a 3 digit number");
} else {
    console.log("It is not a 3 digit number");
}
*/

//Q4:Voting Eligibility
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter your age:")
if (num >= 18){
    console.log("You can vote");
} else {
    console.log("You can't vote");
}
console.log("Your age is " + num);
*/

//Q5:Even or Odd Checker
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num % 2 == 0){
    console.log("It is a even number");
} else {
    console.log("It is a odd number");
}
*/

//Q6 Grading System
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num >= 90){
    console.log("A+");
} else if(num >= 75){
    console.log("A");
} else if (num >= 60){
    console.log("B");
} else if (num >= 40){
    console.log("C");
} else {
    console.log("Fail");
}
*/

//Q7 Check if Leap Year
/*
const prompt = require("prompt-sync")()
let year = prompt ("Enter a year:")
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("It is a Leap Year");
} else {
    console.log("It is not a Leap Year");
}
// it should be divisible by 4 and not by 100 and shoulbe eb divisible bye 400
*/

//Q8 Check Range bwn 10-50
/*
const prompt = require("prompt-sync")()
let num = prompt ("Enter a number:")
if (num >= 10 && num <=50){
    console.log("It is in a range 10 to 50");   
} else {
    console.log("It is out of range  10 to 50");
}
*/

//Q9 Login System
/*
const prompt = require("prompt-sync")()
let username = prompt ("Enter username: ")
let password = prompt("Enter Password: ")
if (username == "admin" && password == "1234"){
    console.log("Login Successful");
} else {
    console.log("Invalid Username Or Password");
}
*/

//Q10 Largest of Two Numbers
/*
const prompt = require("prompt-sync")()
let num1 = prompt ("Enter a number 1 :")
let num2 = prompt ("Enter a number 2 :")
if (num1 > num2){
    console.log(num1 +" is greater then " + num2);
} else {
    console.log(num2 +" is greater then " + num1);
}
*/

//Q11 Temperature Advisor
//Q12 Triangle Type Checker
//Q13 Grade & Scholarship
//Q14 Number Guessing
const prompt = require ("prompt-sync")();
const num = 7
let enterNumber;
let attempt = 0;
while (true) {
    enterNumber = prompt ("Guess number:")
    attempt ++;
    if (enterNumber == num) {
        console.log(`Correct! you guessed in ${attempt} attempts`);
        break;
    } else if (enterNumber < num) {
        console.log("Guess little high.");
    } else {
        console.log("Guess little low.");   
    }
}
//Q15 Multiple Conditions