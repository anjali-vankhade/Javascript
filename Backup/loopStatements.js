document.write("<h3>for Loop statements : </h3>");

var x;
for(var x=0; x<5; x++){
    document.write("The value of x is: ", x);
}
document.write("<br>")

// ================================
document.write("<h3>While Loop statements : </h3>");

var x = 0;
while(x <= 5){
    document.write("The value of x is: ", x + ", ");
    x++;
}
document.write("<br>")

// ================================
document.write("<h3>Do-While Loop statements : </h3>"); 
var x =10;
do{
    x++;
    document.write("The value of x is: ", x);
    document.write("<br>")
}
while(x<15){
    var z =(x<=15) ? "print true" : "print false";
    document.write("The value of x is: ", z);
}
document.write("<br>")

// ================================
document.write("<h3>Break the Loop statements : </h3>"); 
let y;
for(y = 0; y<=10; y++){
    document.write("The value of x is: ", y + ", ");
    document.write("<br>")
    if(y==8){
        document.write("The statement executed");
        break;
    }
}
document.write("<br>")

// ================================
document.write("<h3>Skipping the Loop Cycle : </h3>"); 
let p;
for(p = 0; p<=10; p++){
    document.write("The value of x is: ", p + ", ");
    document.write("<br>");
    if(p==3){
        document.write("The statement executed");
        continue;
    }
}