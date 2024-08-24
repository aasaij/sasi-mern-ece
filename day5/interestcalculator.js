//Function
//function definition
// function greet(user) {
//   alert("Good afternoon " + user);
// }
function calculate() {
  let p = document.getElementById("principal").value;
  // p.style.backgroundColor = "blue";
  // p.style.color = "white";
  let r = document.getElementById("rate").value;
  let t = document.getElementById("year").value;
  let si = document.getElementById("si");
  let ci = document.getElementById("ci");
  let interest = document.getElementById("interest");
  let cinterest;
  if (si.checked === true) cinterest = (p * t * r) / 100;
  else if (ci.checked === true) cinterest = p * (1 + r / 100) ** t - p;
  else cinterest = "Invalid choice";
  if (typeof cinterest !== "string") interest.value = cinterest.toFixed(2);
  else interest.value = cinterest;
}
// if (condition){
//     <true_statements>
// }
// else{
//     false_statements
// }

// //
// <!-- Attendance : https://bit.ly/ZO-240824
// Trainer : Tambi
// Session : FN -->
