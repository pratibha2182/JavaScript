/**Store your friend’s marks and check if they are greater than 50.  we will solve it by if else looping */

const prompt = require("prompt-sync")();
let marks = prompt("Enter Your Marks: ")

if (marks > 50) {
    console.log("You have score more then 50.");
} else {
    console.log("You have not score more then 50.")
}
console.log("Your marks is: " + marks);
 