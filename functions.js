function myFunction(msg, n){ // define a function
    console.log(msg, n);
}
myFunction("welcome for learning sessions", 90);  // call function

function sumFunction(x, y){
    s = x+y
    return s;
}
let val = sumFunction(340, 89);
console.log(val);
// ===================================

// Arrow Functions --------------
const sum = (a, b) => {
    // console.log(a + b);
    return a+b;
}

const multiply = (a, b) => {
    // console.log(a*b);
    return a*b;
}

// practice question 1 -
function countVowel(msg){
    let count = 0
    for(let char of msg){
        if(char === 'a' || char === "e" || char === "i" || char ==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowel("welcome for learning sessions");

//  by arrow function
let arrCountVowel = (msg) => {
    let count = 0
    for(let char of msg){
        if(char === 'a' || char === "e" || char === "i" || char ==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}
// =====================================

// forEach loop in Array -------------------
let arr = [1, 2, 3, 4, 5, 6]
arr.forEach(function printVal(val, i, arr){
    console.log(`value of forEach ${val, i, arr}`);
});
// same by arrow function
let cities = ["Banglore","Mumbai","Chennai","Delhi","Hyderabad","pune"];
cities.forEach((val, index) => {
    console.log(`value of forEach by arrow function - ${val.toUpperCase(), index}`);
})

// practice ques - for a given array print the square of each value
let numbers = [2, 5, 9, 12, 6, 8];
numbers.forEach(function printSquare(val) {
    squarevalues = val*val;
    console.log(squarevalues);
})

numbers.forEach((val) => {
    squarevalues = val*val;
    console.log(squarevalues);
})
// ====================================

// map method in array
let nums = [67, 54, 37];
let newArr = nums.map((val) => {
    return val * 2;
});
console.log(newArr);
// =====================================

// filter method in array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr2 =  arr2.filter((val) => {
//     return val %2 === 0;
// });
arr2 = arr2.filter((val) => val %2 === 0);
console.log(arr2);
// =====================================

// reduce method in array
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = arr3.reduce((prev, current) => {
    return prev + current; // sum of array numbers
})
console.log(`value of reduce function sum of array numbers  ${res}`);

let res1 = arr3.reduce((prev, current) => {
    // return prev > current ? prev : current; // greater num from array
    return prev < current ? prev : current; // smaller num from array
})
console.log(`value of reduce function greater num from array  ${res1}`);

let res2 = arr3.reduce((prev, current) => {
    return prev + current;
})
res2 /= arr3.length;
console.log(`value of reduce function sum of array numbers  ${res2}`);
// ===============================================

// practice ques ----
let marks = [85, 76, 50, 98, 47, 67, 95, 92];
let maxScoredMarks = marks.filter((val) => val > 90);
console.log(maxScoredMarks);

let promptNum = prompt("Enter any number");
let newUserArr = [];
for (let i=1; i<=promptNum; i++){
    newUserArr[i-1] = i;
}
console.log("print the numbers of new arr", newUserArr);

let arrSum = newUserArr.reduce((prev, current) => prev + current);
console.log("print the sum of all the numbers of new arr", arrSum);

let factorial = newUserArr.reduce((prev, current) => prev * current);
console.log("print the product of all the numbers of new arr", factorial);

