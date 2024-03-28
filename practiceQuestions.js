//QS1 Write a function that takes a string as input and returns the string reversed. ----
let str = "javascript";
console.log(str);
let newStr = str.split("");
newStr = newStr.reverse().join("");
console.log(newStr);
// function reverseStr(str){
//     let newStr = str.split("");
//     newStr = newStr.reverse().join("");
//     console.log(newStr);
// }
// reverseStr("welcome to javascript");

//
let arr1 = [3, 6, 4, 8,6, 8, 5];
let newArrr = arr1.filter((val, i) => {
    return arr1.indexOf(val) === i;
});
console.log(newArrr);

//QS2 Program to Add Two Numbers
let num1 = 43; 
let num2 = 20; 
let totalSum;
totalSum = num1+num2; // simple way
console.log("total of the both numbers are -", totalSum);
//  with function
function addNumbers(num1, num2){
    totalSum = num1+num2;
    return totalSum;
}
addNumbers(num1, num2);

//QS3 Add Two Numbers Entered by the User
let num3 = parseInt(prompt("enter the number 1"));
let num4 = parseInt(prompt("enter the number 2"));
let totalVal;
totalVal = num3 + num4;
console.log(`The total of user 1 - ${num3} and the user 2 - ${num4} is ${totalVal}`);

// Find the Square Root
