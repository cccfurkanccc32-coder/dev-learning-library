// Strings
const firstName = "Dominique";
const lastName = "Striekwold";

const fullName = firstName + " " + lastName;


// Numbers
const a = 10;
const b = 5;

const total = a + b;


// Console output (voor developers)
console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("Full name:", fullName);

console.log("Number A:", a);
console.log("Number B:", b);
console.log("Total:", total);

console.log("Sentence preview:");
console.log(fullName + " | 10 + 5 = " + total);


// Output op de webpagina
document.getElementById("output").textContent =
  fullName + " | 10 + 5 = " + total;