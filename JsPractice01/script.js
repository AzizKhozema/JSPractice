/*1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

/*let today = new Date();
let day = today.getDay();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[day];

console.log("Today is: " + currentDay);

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

if (hours < 12){
    console.log(`Current time is ${hours}:${minutes} AM`);
} 
else if (hours === 24) {
    console.log(`Current time is ${hours-12}:${minutes} AM`);
}
else if (hours === 12) {
    console.log(`Current time is ${hours}:${minutes} PM`);
}
else {
    hours -= 12;
    console.log(`Current time is ${hours}:${minutes}:${seconds} PM`);
} */

// Chat Gpt
let today = new Date();
let day = today.getDay();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[day];

console.log("Today is: " + currentDay);

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let period = hours >= 12 ? "PM" : "AM"; // ternary operator (?), compact if else statement, if hours >= 12 then PM else AM.

if (hours === 0) {
    hours = 12;
} else if (hours > 12) {
    hours -= 12;
}

minutes = String(minutes).padStart(2, '0');
seconds = String(seconds).padStart(2, '0');

console.log(`Current time is: ${hours} ${period} : ${minutes} : ${seconds}`);
