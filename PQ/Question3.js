/**Swap two variables’ values using a third variable. */

const prompt = require("prompt-sync")();

let a = prompt("A: ")
let b = prompt("B: ")

let c = a
a = b
b = c

console.log("A:",a);
console.log("B:", b)


// console.log (a,b)