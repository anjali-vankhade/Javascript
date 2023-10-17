document.write("<h3>If else statements : </h3>");

// sample program1 ------------------
var x = 20;
if(x < 20){
	document.write("The value of x is less than 10");
} else if(x > 10){
	document.write("The value of x is greater than 10");
} else {
	document.write("The value of x is equal than 10");
}
document.write("<br>")

// sample program 2 to check even/odd number ------------------
var y = 8;
if(y %2 == 0){
	document.write("The value of y is Even Number");
} else {
	document.write("The value of y is Odd Number");
}
document.write("<br>")

// sample program 3 to check positive/negative number------------------
var z = 9;
if(z>0){
	document.write("The value of z is Positive Number");
} else if(z<0){
	document.write("The value of z is Negative Number");
} else {
	document.write("The value of z is Zero");
}
document.write("<br>")

// sample program 4 to check even/odd && positive/negative number ------------------
var a = 13;
if(a>0){
	if(a%2 == 0){
		document.write("The Number is positive and even.")
	} else {
		document.write("The Number is positive and odd.")
	}
} else if(a<0){
	if(a%2 == 0){
		document.write("The Number is negative and even.")
	} else {
		document.write("The Number is negative and odd.")
	}
} else {
	document.write("The Number is Zero.");
}
document.write("<br>")

// ===============================================
document.write("<h3>Switch case statements : </h3>");

var month = 8;
switch (month){
	case 1: 
		document.write("January");
		break;
	case 2: 
		document.write("Febrarury");
		break;
	case 3: 
		document.write("March");
		break;
	case 4: 
		document.write("April");
		break;
	case 5: 
		document.write("May");
		break;
	case 6: 
		document.write("June");
		break;
	case 7: 
		document.write("July");
		break;
	case 8: 
		document.write("August");
		break;
	case 9: 
		document.write("September");
		break;
	case 10: 
		document.write("October");
		break;
	case 11: 
		document.write("November");
		break;
	case 12: 
		document.write("December");
		break;
	default:
		document.write("No month falls on this number");
}
document.write("<br>")

var weeks = "Wednesday";
switch(weeks){
	case "Tuesday":
		document.write("2nd day in a week");
		break;
	case "Wednesday":
		document.write("3rd day in a week");
		break;
	default:
		document.write("wrong input");
}
document.write("<br>")

var bool = true;
switch(bool){
	case true:
		document.write(1);
		break;
	case false:
		document.write(0);
		break;
	default:
		document.write("wrong input");
}