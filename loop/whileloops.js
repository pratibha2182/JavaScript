/**
 while loop repeated block of code untill the condition is true if condition is false it stops
 if increment or decrement is not done it will run infite  
 */

// example
// Print numbers from 1 to 10 using a while loop.
/*
let i = 1; // intilizaiton
while (i < 10){ // conditiom
    console.log(i); 
    i++; // increment
}
*/


// Print even numbers from 1 to n using a while loop
/*
const prompt = require("prompt-sync")()
let num = Number(prompt("Enter a number:"))
let i = 1;
while (i <= num){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;  
}
*/


// Find the sum of first n numbers using a while loop.
/*
const prompt = require("prompt-sync")()
let num = Number(prompt("Enter a number:"))
let i = 1;
sum = 0
while (i <= num){
    sum += i;
    i++
    console.log(sum);
} 
*/


//Keep asking the user for a password until they enter "secret".
/*
const prompt = require("prompt-sync")()
let pass = "";
while (pass !== "secret"){
    let pass = prompt("Enter a number:")
    if (pass !=="secret"){
        console.log("Try Again");
    }
}
console.log("Correct");
*/


//Keep generating random numbers (1–10) until you get a 5. Print how many tries it took.
/*
const prompt = require("prompt-sync")()
let randomNum = Math.floor(Math.random() * 10) + 1;
// or 
// let randomNum = 5;
let num;
while (num !== randomNum){
     num = Number(prompt("Enter number: "))
    if (num !== randomNum){
        console.log("Try again");
    } 
}
console.log("Correct"); 
*/

// Print numbers from 1 to 20 using a while loop.

// Print the multiplication table of a number entered by the user.

// Find the sum of even numbers from 1 to n.

// Keep asking the user to type "hello" until they do so.

// Print numbers from n down to 1.

// 2. Medium Level
// Ask the user for positive numbers until they enter a negative number. Then print the sum of all entered numbers.

// Generate random numbers from 1–5 until you get the number 3. Print how many attempts it took.

// Ask the user to guess a secret word, giving them a hint each time until correct.

// Find the factorial of a number using a while loop.

// Reverse a number using a while loop (e.g., 123 → 321).

// 3. Hard Level
// Keep asking the user to enter marks until they enter -1, then output the average.

// Simulate a simple ATM:

// Keep asking for a PIN until correct.

// Then allow withdrawals until balance is 0.

// Check if a number is a palindrome using a while loop.

// Simulate rolling a dice until you roll a 6. Count rolls.

// Ask the user to guess a number between 1–100 and give "too high" / "too low" hints until they guess correctly.