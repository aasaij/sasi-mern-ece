let principal, rate, years, interest;
// principal = 10000;
// rate = 12;
// years = 4.5;
principal = prompt("Enter a principal");
rate = prompt("Enter rate of Interest ");
years = prompt("Enter number of years");
// Calculate the compound interest
interest = principal * (1 + rate / 100) ** years;
// Round the interest to two decimal places
interest = interest.toFixed(2);
// console.log("Compound Interest : " + interest);
document.write("Compound Interest : " + interest);
