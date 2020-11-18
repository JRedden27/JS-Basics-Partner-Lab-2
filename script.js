//let num1 = Math.floor(Math.random() * 11);
//let num2 = Math.floor(Math.random() * 11);

//let answer = Number(num1 + num2);

//let question = prompt("What is " + num1 + " plus " + num2 + "?");

// if(Number(question) === Number(answer)) {
//    alert("You're right!");
// } else {
//    alert("You're wrong!");
// }

let num1 = prompt ("What Is The Radius");
const pi =  3.14;

if (num1 < 0) {
    alert("Don't use a negative number!");
} else {
    let answer = (pi * Math.pow(num1, 2));
    alert("Area: " + answer);
}




// let num1 = prompt ("How Much do you weigh? in lbs");
// let num2 = prompt ("How tall are you? in inches");
// let num3 = (num2 / Math.pow(num1,2));
// const conversionFactor = 703;
// let bmi = (num3 * conversionFactor);
// let range;

// if (bmi >= 30) {
//     range = "Obese"
// } else if (bmi >= 25) {
//     range = "Overweight"
// } else if (bmi >= 18.5) {
//     range = "Normal/ Healthy"
// } else {
//     range = "Underweight"
// }

// alert("BMI: " + bmi + " " + range);
