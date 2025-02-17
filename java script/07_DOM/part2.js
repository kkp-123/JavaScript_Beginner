// let div = document.querySelector("div");
// console.log(div)

// get attribute
// let div = document.querySelector("div");
// let divatr = div.getAttribute("id");
// console.log(divatr);

// set attribute
// let div = document.querySelector("div");
// div.setAttribute("class","dd1");
// console.log(div);

// class list
// document.querySelector("body").classList.add('white');
// document.querySelector("body").classList.remove('dark');

// change style attribute value
// let div = document.querySelector("div");
// div.style.backgroundColor = "blue";
// div.style.color = "white";

// create elements

// let newBtn = document.createElement("button");
// newBtn.innerText = "submit";
// console.log(newBtn);


// insert elements
// let div = document.querySelector("div");
// let newBtn = document.createElement("button");
// newBtn.innerText = "submit";
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
 
// remove elements
// let para =  document.querySelector("p");
// para.remove();


// practise question

let btn  = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body = document.querySelector("body");
body.prepend(btn);


// practise question 2

let para = document.querySelector(".p2");
para.classList.add("newClass");