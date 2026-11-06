/*
 * Name: Ananya Gupta
 * Student ID: BCS2025560
 * Roll No: 2510303094
 */

// Task 1: Function with return value
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Asha"));

// Task 2: Arrow function
const square = (number) => number * number;
console.log(square(6));

// Task 3: Default parameter
function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}
console.log(billWithTax(100));
