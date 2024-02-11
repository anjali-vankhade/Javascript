// // for loop 
// for(let i=1; i<=5; i++){
//     console.log("i=", i);
// }

// // sum of n numbers
// let n = 5;
// let sum = 0;
// for(let i=0; i<=n; i++){
//     sum = sum + i; // sum= 15
// }
// console.log("sum value is", sum);

// // while loop 
// let j = 1;
// while (j<=5){
//     console.log("j=", j);
//     j++;
// }

// // for of loop
// let char = "anjaliKumbhare";
// for (let val of char){
//     console.log("char -", char);
// }

// // for in loop
// const profile = {
//     username : "shardhakhapra",
//     isFollow : false,
//     posts : 195,
//     followers : 598,
//     following : 4,
//     fullName : "Shardha Kapra",
//     profile : "enterpreneur",

// };
// for(let key in profile){
//     console.log("key -", key,", value -", profile[key]);
// }

// // practice question 1 - print all even numbers 0 to 100.
// let evenNum = 0;
// for(let i=0; i<=100; i++){
//     if(i%2 === 0){
//         console.log("print even numbers -", i)
//     }
// }

// practice question 2 - 
let gameNum = 30;
let guessNum = prompt("Guess an Game number");
for(let i=0; guessNum != gameNum; i++){
    guessNum = prompt("Wrong guess, Guess again");
}

// while(guessNum != gameNum){
//     guessNum = prompt("Wrong guess, Guess again");
// }
alert("congractulations, your guess is right", guessNum);
