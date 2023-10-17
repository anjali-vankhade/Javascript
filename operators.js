document.write("<h3><u>Types of Operators : </u></h3>");

document.write("<h4>1. Arithmetic Operator : </h4>");
document.write("<p>1.Addition, 2.Subtraction, 3.Multiplication, 4.Division, 5.Modulus, 6.Increment, 7.Decerment</p>");
var x = 9;
var y = 7;
document.write("Addition - \n", x+y);
document.write(",\nSubtraction - \n", x-y);
document.write(",\nMultiplication - \n", x*y);
document.write(",\nDivision - \n", x/y); // division is the quotion of the divison
document.write(",\nModulus - \n", x%y); // Modulus is the reminder of the divison
document.write(",\n Increment - \n", ++x);
document.write(",\n Decrement - \n", --x);

// ====================================================
document.write("<h4>2. Assignment Operator : </h4>");

var a = 14;
var b = a;
document.write("The Value of a ", a);
document.write(", The Value of b ", b);

var a1 = 32;
a1 += 4;
a1 = a1 + 4;  // both statment meaning are same
document.write(", The Value of a1 ", a1);

a1 -= 6;
document.write(", The Value of a1 ", a1);

a3 = 40;
a3 *= 2;
document.write(", The Value of a3 ", a3);

a4 = 60;
a4 /= 3;
document.write(", The Value of a4 ", a4);

a5 = 20;
a5 %= 3;
document.write(", The Value of a5 ", a5);

// ====================================================
document.write("<h4>3. String Operator : </h4>")

var str1 = "Hello";
var str2 = "Anjali";
document.write(str1 + " " + str2)
var str3 = "\nWelcome";
str3 += " " + str2;
document.write(str3)

var a = 14;
var b = 5;
var c = 9;
var d = 18;
var result = a + b + "Hello" + c + d;
document.write("<br>")
document.write("The Value of given variables is " + result + "\nand this is correct answer.");

// ====================================================
document.write("<h4>4. Conditional Operator : </h4>")

var x = 30;
var y = (x >= 40)?"true":"false";
document.write(y)

// ====================================================
document.write("<h4>5. Logical Operator : </h4>")

// ====================================================
document.write("<h4>6. Comparison Operator : </h4>")

var x1 = 15;
document.write(x1 == 10);
document.write("<br>")

document.write(x1 === 10);
document.write("<br>")

document.write(x1!=10);
document.write("<br>")

document.write(x1 !== 10);
document.write("<br>")

document.write(x1 > 10);
document.write("<br>")

document.write(x1 < 10);
document.write("<br>")

document.write(x1 >= 10);
document.write("<br>")

document.write(x1 <= 10);
document.write("<br>")

// ====================================================
document.write("<h4>7. Type of Operator : </h4>")

var p = 20;
var char = "program";
var flag = true;
var q;
var j = null;
document.write(typeof(p)+ "-\n" + p + ",\n"); 
document.write("<br>")

document.write(typeof(char)+ "-\n" + char + ",\n");
document.write("<br>")

document.write(typeof(flag)+ "-\n" + flag + ",\n");
document.write("<br>")

document.write(typeof(q)+ "-\n" + q + ",\n");
document.write("<br>")

document.write(typeof(j)+ "-\n" + j + ",\n");

// ====================================================
document.write("<h4>7. Bitwise Operator : </h4>")
var p = 5;
var q =1;

document.write(p&q);
document.write("<br>")
document.write(p|q);
document.write("<br>")
document.write(~p);
document.write("<br>")
document.write(p^q);
document.write("<br>")

// 0101