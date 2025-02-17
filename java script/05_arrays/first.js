// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);

// string array 

// let heroes = ["ironmans","thor","hulk","shaktiman","spiderman","antman"];
// console.log(heroes);

// type of array is object

// let heroes = ["ironmans","thor","hulk","shaktiman","spiderman","antman"];

// for(let i of heroes )
// {
//     console.log(i);
// }


// practise question 1 avarage of marks

// let marks = [85,97,44,37,76,60];
// let len = marks.length;
// let sum = 0;

// for(let i of marks){

//     sum = sum + i;
// }

// let average = sum/len;
// console.log(average);



//practise question 2  change array after 10% deduct and store final price

// let items = [250,645,300,900,50];

// for(let i=0;i<items.length;i++)
// {
//     let finalVal = items[i] -  ((items[i]*10)/100) ;
//     items[i] = finalVal;
// }

// for(let j of items)
// {
//     console.log(j);
// }


// array methods


// push() add to end
// pop() delete last item and return
// tostring() converts to string


// push()

// let foodItems = ['potato','apple','litchi','tomato'];
// foodItems.push("chips");
// console.log(foodItems);


// pop()
// let foodItems = ['potato','apple','litchi','tomato'];
// foodItems.pop();
// console.log(foodItems);

// toString()
// let foodItems = ['potato','apple','litchi','tomato'];
// console.log(foodItems.toString());


// concat()
// let marvel_heroes = ['thor','hulk','spiderman','ironman']
// let dc_heroes = ['superman','batman']
// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);

// shift() -> delete item at starting index
// unshift -> push item at starting index
// slice() -> return a pie of the array (return new array) slice(1,2)
// splice() -> change original array

let num = [1,2,3,4,5,6,7,8]
num.splice(2,2,101,103);
console.log(num);


// practise question

let company = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];

// remove the first company from the array

company.splice(0,1);
console.log(company);

// remove Uber or add OLa in its place

company.splice(1,1,'Ola');
console.log(company);

// add amazon at end
company.push("Amazon");
console.log(company);
