class ToyotaCar{
    constructor(brand, milage){  // uses to initializes the object
        this.brand = brand;
        this.milage = milage;
        // console.log("Creating a new object");
    }
    start(){
        console.log("engine starts");
    }
    stop(){
        console.log("engine stops");
    }

    // setBrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new ToyotaCar('fortuner', 10);  // obejct is of type toyota car
// fortuner.setBrand('Mahindra');
console.log(fortuner);
let lexus = new ToyotaCar('lexus', 12);
// lexus.setBrand('Tata')
console.log(lexus);


// INHERITANCE IN JAVASCRIPT =====================
class Person{  // parent class
    constructor(name){
        this.species = "homo spaican";
        this.name = name;
        console.log('start constructor of person');
    }

    eat(){
        console.log('eat')
    } 

    work(){
        console.log('person not do any work')
    }
}
// child class extends parent class 
class Engineer extends Person{    // child class is a derived class
    // using of Super Keyword in Javascript
    constructor(name, branch){
        console.log('start constructor of engineer');
        super(name);  // to invoke parent constructor
        this.branch = branch;
        console.log(this.branch);
        console.log('stop constructor of engineer');
    }
    
    work(){
        super.eat();
        console.log("works on the project build");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat the patient who is not well");
    }
}

let member1 = new Engineer('Anjali','Computer Technology');
console.log(member1);
let member2 = new Doctor();

// Practice Question1 -----------
// QS1 -  create a website for your college 
let data = "college important data";
class User {
    constructor(name, emailId){
        this.name = name;
        this.emailId = emailId;
    }

    viewData(){
        console.log("DATA - ", data);
    }
}

class Admin extends User {
    editData() {
        data = "some required information";
        console.log("DATA - ", data);
    }
}

let student1 = new User('Ankita', 'ankita@gmail.com');
let student2 = new User('Shreeram', 'shreeram@gmail.com');
let student3 = new User('Aniket', 'aniket@gmail.com');

let User1 = new Admin("Admin", "admin@gmail.com");