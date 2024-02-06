document.write("<h3>Hello this is the first sample statement</h3>");

var a = 12;
var b = 9;
var c = a + b;
document.write("The Value of c - ", c);
document.write(",\nThe Value of c - ", a);
document.write(",\nThe Value of c - ", b);

document.write("<h3>Let and const Concepts - </h3>");
// if let and const uses same variable in let it shows the variable is already been declared.
let bikeName;
bikeName = "yamaha";
document.write("Bike Name is ", bikeName);

const x= 5, y =9;
const z = x + y;
document.write(z);

document.write("<h3>Premitive DataTypes - </h3>");
document.write("<p>1.Numbers 2.String 3.Undefined 4.Boolean 5.Null</p>");
var p = 20;
var char = "program";
var flag = true;
var q;
var j = null;
document.write(typeof(p)+ "-\n" + p + ",\n"); 
document.write(typeof(char)+ "-\n" + char + ",\n");
document.write(typeof(flag)+ "-\n" + flag + ",\n");
document.write(typeof(q)+ "-\n" + q + ",\n");
document.write(typeof(j)+ "-\n" + j + ",\n"); // for null it always shows object

document.write("<h3>Console Log and conversion of numbers to strings- </h3>");
// var num = 23; // change to string
var num = String(23); 
console.log(num, typeof(num));

var str = "Flower";
console.log(str, typeof(str));

var bool = String(false); 
console.log(bool, typeof(bool))

var str1 = Number("7468");
str1 = str1 + 5;
console.log(str1, typeof(str1));

var bool1 = Number(true);
console.log(bool1, typeof(bool1));

var number1 = Number('34.674');
var number2 = parseInt('948.345');
var number3 = parseFloat('948.3455654');
console.log(number1, typeof(number1));
console.log(number2, typeof(number2));
console.log(number3, typeof(number3));
console.log(number3.toFixed(2), typeof(number3));

document.write("<h3>Operators - </h3>");