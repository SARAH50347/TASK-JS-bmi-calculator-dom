function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
function convertCmToM(cm) {
  return cm / 100;
}
let meters = convertCmToM(height);
const BMI=(weight/meters**2) ;


console.log(`${BMI} cm is equal to ${meters} meters.`);

alert(BMI);

if (BMI < 18.5) {
  alert("You are underweight.");
} else if (BMI >= 18.5 && BMI < 25) {
  alert( "You have a healthy weight.");
} else if (BMI >= 25 && BMI < 30) {
  alert("You are overweight.");
} else  if( BMI >= 30) {
  alert( "You are obese.");
}

}
