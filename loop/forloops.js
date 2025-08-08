/*
A for loop lets you repeat a block of code a specific number of times.
Initialization → runs once at the start
Condition → checked before every loop; if false, loop stops
itration → changes the counter each time (i++, i--, etc.)
*/

//incrementing 
/*
for (let i = 0; i <= 5 ; i++){
    console.log("count: ", i);
}

*/
//decrementing
/* 
for (let i = 5; i >= 0; i--){
    console.log("count: " + i);
    
}
*/

// Skipping Values with Step
/*
for(let i = 0; i <= 10; i +=2){
    console.log("Skipped: " + i);  
}
*/

//loop breaks
/*
for(let i = 0; i <= 10; i ++){
    if (i === 6){
        break;
    }
    console.log("break: " + (i+1));  
}
*/

//continue loop
/*
for(let i = 0; i <= 10; i ++){
    if (i === 6){
        continue;
    }
    console.log("break: " + (i));  
}
*/

// give list of name ant tell hello using one Condition
/*
let name = ["pratibha","ultron","cyclone","karan","prabhat"]
for (let i = 0; i < name.length; i++){
    console.log(`Hello, ${name[i]}!!!!`);    
}
*/

// simple counting
/*
for (i = 0; i <= 10; i++){
    console.log(i);
}
*/

//multiplication
/*
const prompt = require("prompt-sync")()
let num = Number(prompt("Enter a number:"))
for(let i = 1; i <= 10; i++){
    console.log(num + " X " + i + " = " + (num*i));
}
*/

// sum of first n numbers
const prompt = require("prompt-sync")()
let num = Number(prompt("Enter a number:"))
let sum = 0;
for (let i = 1; i <= num; i++){
    sum = sum + i;
}
console.log(sum);

// even numbers 
/*
const prompt = require("prompt-sync")()
let num = Number(prompt("Enter a number:"))
for (i=1; i<=num; i++){
    if (i % 2 == 0){
    console.log(i);
    }
}
*/

// reverse string
/*
let name = "Pratibha"
let reverse = name.split("").reverse().join("");
console.log(reverse);
*/
//method 2
/*
let name = "Hello";
let reversed = ""
for (let i = name.length -1 ; i >= 0; i--){
    reversed += name[i];
}
console.log(reversed);
*/

//method 3
/*
let name ="nitio"
let reverse = name.split("").reduce((rev,char) => char + rev, "");
// reduce start with empty and char+rev will add charater and move to the end
console.log(reverse);
*/