const student ={
    fullName : "Anjali Vankhade",
    marks : 78.00,
    calMarks : function(){
        console.log("print marks = ", this.marks)
    }
}

const employee = {
    calTax(){
        console.log("Employee tax is 10%");
    }
}
const emp_Anjali = {
    salary : 50000
}
const emp_Rama = {
    salary : 80000
}
const emp_Ankita = {
    salary : 60000,
    calTax(){
        console.log("Employee tax is 15%")
    }
}
emp_Anjali.__proto__ = employee;
emp_Rama.__proto__ = employee;
emp_Ankita.__proto__ = employee;