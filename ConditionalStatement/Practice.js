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
/*
const prompt = require("prompt-sync")()
let temp = prompt ("Enter a temperature in which you are:")
if (temp < 0){
    console.log("It's freezing! Wear a heavy coat, gloves, and a scarf.");
} else if (temp >= 0 && temp <= 14){
    console.log("It's cold outside. Wear a jacket.");
} else if (temp >= 15 && temp <= 24){
    console.log("The weather is nice. Light clothing should be fine.");
} else if (temp >= 25 && temp <= 34){
    console.log("It's warm! Stay hydrated.");
} else {
    console.log("It's very hot! Avoid going out in the sun and drink plenty of water.");
}
*/

//Q12 Triangle Type Checker
/*
const prompt = require("prompt-sync")()
let side1 = Number(prompt ("Enter side  1 :"))
let side2 = Number(prompt ("Enter side 2 :"))
let side3 = Number(prompt ("Enter side 3 :"))
// for checking if it is a triangle 1 2 > 3, 2 3 > 1, 1 3 > 2 if it is a triangle
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    console.log("It is the Tringle but");
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral Traingle")
        console.log("All sides are equal.");
        
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
        console.log("Isosceles Triangle");
        console.log("Any 2 side are same.");
        
    } else{
        console.log("Scalene Triangle");
        console.log("All sides are different");
    }
} else {
    console.log("It is not a triangle"); 
}
*/

//Q13 Grade & Scholarship
/*
const prompt = require ("prompt-sync")();
let marks = Number(prompt("Enter your marks:"))
if (marks < 0 || marks > 100){
    console.log("Invalid marks");
} else if (marks >= 90){
    console.log("You get A Grade with scholarship of 100%");
} else if (marks >=80){
    console.log("You get B Grade with scholarship of 50%");
} else if (marks >= 70){
    console.log("You get C Grade with scholarship of 25%");
} else if (marks >= 60){
    console.log("You get D Grade with no scholarship");
} else {
    console.log("You are fail please regive the examination");
}
*/

//Q14 Number Guessing
/*
const prompt = require ("prompt-sync")();
const num = 7
let enterNumber;
let attempt = 0;
while (true) {
    enterNumber = parseInt(prompt ("Guess number:")) //here we have to convert string to integer if we usee === insted of ==
    attempt ++; // will count attempts
    if (enterNumber === num) {
        console.log(`Correct! you guessed in ${attempt} attempts`);
        break;
    } else {
        console.log("Wrong Guess try again.");   
    }
}
*/

//Q15 Multiple Conditions
/*
let age = 20;
let hasPass = true;

if (age >= 18 || hasPass) {
    console.log("You are allowed to enter.");
} else {
    console.log("Entry denied.");
}
*/