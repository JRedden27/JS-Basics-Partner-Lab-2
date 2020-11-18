let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

let answer = Number(num1 + num2);

let question = prompt("What is " + num1 + " plus " + num2 + "?");

if(Number(question) === Number(answer)) {
    alert("You're right!");
} else {
    alert("You're wrong!");
}