const age = 18;

// comparisons
const result1 = "age === 18: " + (age === 18);
const result2 = "age !== 21: " + (age !== 21);
const result3 = "age >= 18: " + (age >= 18);
const result4 = "age <= 20: " + (age <= 20);


// console output (voor leren/debuggen)
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


// output op de webpagina
document.getElementById("output").innerHTML =
  "<li>" + result1 + "</li>" +
  "<li>" + result2 + "</li>" +
  "<li>" + result3 + "</li>" +
  "<li>" + result4 + "</li>";