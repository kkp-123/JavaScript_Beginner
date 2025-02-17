
// event handle through function

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 is clicked");
//     let a = 25;
//     a++;
//     console.log(a);
    
// }
// event object

//let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) =>{
    //     console.log(e);
    //     console.log(e.type);
    //     console.log(e.target);
    //     console.log(e.clientX);
    //     console.log(e.clientY);
    // }
    
    // mouseover event
    
    // let box = document.querySelector(".d1");
    
    // box.onmouseover = () =>{
        //     box.style.backgroundColor = "red";
        // }
        
    // Event Listners
    // let btn1 = document.querySelector("#btn1");
    // let handler2 = () => {
    //     console.log("button1 was clicked handler2");
    // }

    // btn1.addEventListener("click",() => {
    //     console.log("button1 was clicked");


    // })
    // btn1.addEventListener("click",handler2)

    // remove event listner
    // btn1.removeEventListener("click",handler2)


    // practise question

    let modebtn = document.querySelector("#mode");
    let currMode = "light";
    modebtn.addEventListener("click",()=>{
        if(currMode == "light")
        {
            currMode = "dark";
            // document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").classList.add('white');
            document.querySelector("body").classList.remove('dark');
        }
        else
        {
            currMode = "light";
            // document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").classList.add('dark');
            document.querySelector("body").classList.remove('white');
        }
        console.log(currMode);
    })