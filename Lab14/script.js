/*
 * Name: Ananya Gupta
 * Student ID: BCS2025560
 * Roll No: 2510303094
 */

// Task 1: setTimeout with zero delay
console.log("Start");
setTimeout(() => console.log("Timer done"), 0);
console.log("End");

// Task 2: clearTimeout
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);
clearTimeout(timerId);
console.log("Cancelled");

// Task 3: setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
