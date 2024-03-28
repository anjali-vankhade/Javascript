// looping over an array
// for loop
let name = ["abc","xyz","pqr","ijk","mno","uvw"];
for(let i = 0;i<name.length;i++){
    console.log(name[i]);
}

// for-of loop
let cities = ["Banglore","Mumbai","Chennai","Delhi","Hyderabad","pune"];
for(let el of cities){
    console.log(el.toUpperCase());
}

//Practice ques 1 : from the given array find the average marks of studen vts
let marks = [85,97,44,37,76,60];
let totalAvgMarks;
let totalMarks = 0;
// by for loop --------------
for(let i=0;i<marks.length;i++){
    totalMarks = totalMarks + marks[i];
}
totalAvgMarks = totalMarks / marks.length;
console.log(`Total average marks of all students is ${totalAvgMarks}`);

// by for-of loop -------------
let sum = 0;
for(let val of marks){
    sum += val;
}
totalAvgMarks = sum / marks.length;
console.log(totalAvgMarks);

// Practice ques 2 : given array all items has 10% off, change the arr and store final price
let prices = [250, 645, 300, 900, 50];
let disprice ;
// by for-of loop ---------------
// let discountArr = [];
// for (let val of prices){
//     disprice = val*(10/100); // 250*0.1
//     val -= disprice;
//     discountArr.push(val);
// }

let i=0;
for(let val of prices){
    disprice = val/10;
    prices[i] = prices[i]-disprice;
    i++;
}
console.log(prices);

// by for loop -------
let items = [250, 645, 300, 900, 50];
for (let i=0;i<items.length; i++){
    disprice = items[i]/10;
    items[i] -= disprice;
}
console.log(items);
// ======================================

// Array Methods -------------------
// Practice ques - 3
let companies = ['Blomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
// companies.shift(); // delete from start 
// companies.splice(2, 1, "Ola"); // remove uber and ola in its place
companies.push("Amazon");
console.log(companies);