/*
 * Name: Ananya Gupta
 * Student ID: BCS2025560
 * Roll No: 2510303094
 */

// Task 1: Read and update object properties
const student1 = { name: "Rohan", roll: 12, marks: 78 };
console.log(student1.name);
student1.marks = 81;
console.log(student1.marks);

// Task 2: Array destructuring
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;
console.log(first);
console.log(second);

// Task 3: Object destructuring
const student2 = { name: "Rohan", roll: 12, marks: 81 };
const { name, roll } = student2;
console.log(name);
console.log(roll);
