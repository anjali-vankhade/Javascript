//Practice question - Get a number using prompt("Enter a number"),Check if number is multiple of 5 or not 

// let num = prompt("Enter a number:");
// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }

// Practice Question - Write a code which can give grades to students according to their scores
let name = "Abhishek";
let score = prompt("Enter a number:");
let grade;
if(score >= 90 && score <= 100){
    grade = "A";
} else if(score >= 70 && score <= 89){
    grade = "B"; 
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else {
    grade = "F";
}
console.log(name + " has " + score + " marks and his grade is " + grade);