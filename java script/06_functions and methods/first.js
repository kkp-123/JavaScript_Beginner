// function myFunction()
// {
//     console.log("Welcome to my site");
//     console.log("we are learning Java script");
// }
// myFunction();


// parameter function

// function myFunction(msg)
// {
//     console.log(msg);
// }
// myFunction("I love js");

// return function

// function sum(a,b)
// {
//     return a+b;
// }
// let val= sum(1,4);
// console.log(val);


// Arrow function

// let mul = (a,b) => {

//     console.log(a*b);
// }
// mul(2,3);
// mul = 40;


// practice question 1



// let sum = 0;

// function noOfVowel(str)
// {
    
//     for(let i of str)
//     {
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
//         {
//             sum += 1;
//         }
//     }

//     console.log(sum);
// }
// let str = prompt("Enter a string")
// noOfVowel(str);


// using arrow function

// let sum = 0;
// let noOfVowel2 = (str) => {

//     for(let i of str)
//     {
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
//             {
//                 sum += 1;
//             }
//     }
//     return sum;
// }

// let str = prompt("Enter a String");
// let n = noOfVowel2(str);
// console.log("no of vowel is: ",n);


// for each loop

// let arr1 = [1,2,3,4,5];

// arr1.forEach(function printVal(val)
// {
//     console.log(val);
// });


// arrow 
// let arr2 = ["pune","delhi","mumbai"];

// arr2.forEach((val)=>{
//     console.log(val);
// })



// practise question


// let arr = [1,2,3,4,5]

// arr.forEach((val)=>{

//     console.log(val**2);
// })


// some more array methods

//map => create new array

// let nums = [1,2,3,4,5];
// nums.map((val)=>{
//     console.log(val);
// })


// second method return value and store in new array
// let nums = [1,2,3,4,5];
// let newArray = nums.map((val)=>{
//     return val;
// })
// console.log(newArray);


// filter method

// let nums = [1,2,3,4,5];

// let evenArray = nums.filter((val)=>
// {
//     return val%2==0;
// })
// console.log(evenArray);


// Reduce method

// let arr1 = [1,2,3,4]

// let newArray = arr1.reduce((res,curr)=>{
//     return res>curr?res:curr;
// })
// console.log(newArray);


// practise questions

// let marks = [87,93,64,99,86]

// let newArray = marks.filter((val)=>{

//     return val>90;
// })
// console.log(newArray);


// practise question 2

let num = prompt("Enter a number");

let arr = [];
for(let i = 0;i<num;i++)
{
    arr[i] = i+1;
}
console.log(arr);

let sums = arr.reduce((prev,curr)=>{

    return prev + curr;
})
console.log(sums);

let factorial = arr.reduce((prev,curr)=>{
    return prev * curr;
})
console.log(factorial);