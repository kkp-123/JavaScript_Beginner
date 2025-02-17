let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

const resetgame = ()=>{
    turnO = true;
    enableBoxes();

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO == true)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add('hide');
    }
}
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>
{
    message.innerText = `Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove('hide');

}
const checkWinner = ()=>{

    console.log(boxes[8]);
    for(let pattern of winPatterns)
    {
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(pos1val,pos2val,pos3val);
        
        
        if(pos1val != "" && pos2val != "" && pos3val != ""  )
        {
            if(pos1val == pos2val && pos2val == pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
                disableBoxes();
                
            }
        }
        
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
