// for(let i = 1;i<=5;i++)
// {
//     console.log("Krish Patel");
// }

// calculate sum of n numbers

// let sum = 0;

// for(let j=0;j<=5;j++)
// {
//     sum = sum + j;
// }

// console.log(sum);


// while loop

// let i=1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }

// do while loop

// let j =1
// do{
//     console.log(j);
//     j++;

// }while(j<=5)


// for of loop (use for string and array)

// let str = "krish patel";
// let size = 0;

// for(let i of str)
// {
//     console.log(i);
//     size+=1;
// }
// console.log(size);

// for in loop (use for objects)

// let student = {
//     name: "krish patel",
//     age : 19,
//     cgpa:7.9,
//     isPass:true
// };

// for(let key in student)
// {
//     console.log(student[key]);
// }


// practise que1;
// o to 100 print even number

// for(let i = 1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }


// que 2
// create a game where you start with random number and user guess number untile the user enters right number

let gamenum = 25;
let usernum = prompt("guess number");

while(usernum != gamenum)
{
    usernum = prompt("you enter wrong number, Guess again : ");
}
console.log("Congratulation, you guess right number");