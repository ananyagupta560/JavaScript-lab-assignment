/*
 * Name: Ananya Gupta
 * Student ID: BCS2025560
 * Roll No: 2510303094
 */

// Task 1: Higher-order function
function applyTwice(fn, value) {
  return fn(fn(value));
}
function addTen(number) {
  return number + 10;
}
console.log(applyTwice(addTen, 5));

// Task 2: Callback formatting
function formatMarks(marks, callback) {
  return callback(marks);
}
console.log(formatMarks(76, (marks) => "Marks: " + marks + "/100"));

// Task 3: Repeat callback
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}
repeatAction(3, (round) => console.log("Round " + round));
