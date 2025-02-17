// alert("Krish Patel");
// document.body.childNodes[1].textContent = "krish";

// accesing elements

// by id
// let heading = document.getElementById("heading");
// console.log(heading);

// by class
// let headings =  document.getElementsByClassName("headings");
// console.log(headings);

// by tagname
// let para = document.getElementsByTagName("p");
// console.log(para);

// queryselector
// let firstEl = document.querySelector("p");
// console.log(firstEl);

// let allEl = document.querySelectorAll("p");
// console.log(allEl);



// properties

// tagname

// let tg = document.querySelector("div").tagName;
// console.log(tg);
// innertext

// let text = document.querySelector("div").innerText;
// console.log(text);

// innerHtml

// let tg = document.querySelector("div");
// console.dir(tg);
// let text = document.querySelector("div").innerHTML;
// console.log(text);

// textContent => also print hidden element


// practise

let h2 = document.querySelector("h2")
h2.innerText = h2.innerText +  " Krish patel";


let d1 = document.querySelectorAll(".box");

let index = 1;
for(div of d1)
{
    div.innerText = `new unique value ${index}`;
    index ++;
}
// d1[0].innerText = "new uique value 1"
// d1[1].innerText = "new uique value 2"
// d1[2].innerText = "new uique value 3"



