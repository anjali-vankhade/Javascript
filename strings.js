// create a username using prompt starts with @ full name and ends with fullname lenth -----------
let fname = prompt("Enter your full name");
let userName = `@${fname}${fname.length}`;   
// let userName = "@"+fname+fname.length;
console.log(userName);