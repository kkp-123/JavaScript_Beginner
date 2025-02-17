// Strings

// let str  = "krish patel";
// console.log(str.length);

// print character from string

// let name = "krish";
// console.log(name[0]);


// Templete Literals(print string with variable in single line use ${} for variable)
// let name = "krish"
// let sentence  = `This is a templete literal`;
// console.log(sentence , typeof sentence);
// let full = ` my name is ${name}`;
// console.log(full)

// string interpolation
// let sentence  = `This is a templete literal ${1+2+3}`;
// console.log(sentence);


// escape characters

// /n for next line

// console.log("my name is \n krish patel");

// /t for space
// console.log("my name is \t krish patel");



// String methods

// uppercase
// let str = "krish"
// console.log(str.toUpperCase());
// 

// lowerrcase
// let str = "krish"
// console.log(str.toLowerCase());

// trim
// let fullname = "  krish patel";
// console.log(fullname.trim())

// slice

// let str = "krish patel";
// console.log(str.slice(2,5));

// concat

// let str1 = "krish";
// let str2 = "patel";

// console.log(str1.concat(str2));


// replace

// let str = "hello"

// console.log(str.replace("h","y"))

// charat

// let str = "krish";
// console.log(str.charAt(3));


// practice question

let username = prompt("Enter name");
console.log("\n");
let username2 = "";

username2 = username2.concat("@",username,username.length);

console.log(username2);
