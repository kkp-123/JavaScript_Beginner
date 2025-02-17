// const student = {
//     fullname:"krish patel",
//     marks:94.4,
//     printMarks: function() {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// };

// set prototype

// const karanArjun = {
//     salary : 50000,
//     calcTax(){
//         console.log("tax rate is 20%")
//     }
// };

// karanArjun.__proto__ = employee;
// ****if object & prototype have same method, object's method will be used


// class ToyotaCar {
//     constructor(){
//         console.log("creating new object");
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }
// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");




// inheritence

// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class Child extends Parent{

// }
// let obj = new Child();


//**** 

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
// }
// class Engineer extends Person{
//     constructor(branch){
//         super();
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve problems, build something");
//     }
// }



// let krish = new Engineer();
// let engobj = new Engineer("ahmedabad");

// **********

// practise question

let DATA = "secret Data";
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("website Data");
        console.log("Data = ", DATA);
    }
}

class Admin extends User{
    constructor(name,email)
    {
        super(name,email);
    }
    editData()
    {
        DATA = "some new value";
    }
}
let obj = new User("krish","krish@gmail.com");
let admin1 = new Admin("admin","admin@gmail.com");

