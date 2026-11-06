/*
 * Name: Ananya Gupta
 * Student ID: BCS2025560
 * Roll No: 2510303094
 */

// Task 1: Object to JSON text
const student = { name: "Rohan", marks: [70, 80] };
const jsonText = JSON.stringify(student);
console.log(jsonText);

// Task 2: JSON text to object
const cityText = '{"city":"Pune","pin":411001}';
const cityObject = JSON.parse(cityText);
console.log(cityObject.city);

// Task 3: Handle invalid JSON
const invalidText = "{name: Rohan}";
try {
  JSON.parse(invalidText);
} catch (error) {
  console.log("Invalid JSON");
}
