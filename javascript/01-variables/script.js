// Variables
const name = "Dominique";
const age = 44;


// Console output (voor developers)
console.log("Name:", name);
console.log("Age:", age);

console.log("Sentence preview:");
console.log("My name is " + name + " and I am " + age + " years old.");


// Output op de webpagina
document.getElementById("output").textContent =
  "My name is " + name + " and I am " + age + " years old.";