let boxes = document.querySelectorAll('.b1');
let result = document.querySelector('.r1');


// wining senarios

let arr = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

let turnO = true;
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

        checkwinner();
    })
})

const showWinner = (winner)=>{

    result.innerText =`congratulations , winner is ${winner}`;
    boxes.disabled = true;
}
const checkwinner = ()=>{

    for(let a of arr)
    {
        let pos1 = boxes[a[0]].innerText
        let pos2 = boxes[a[1]].innerText
        let pos3 = boxes[a[2]].innerText
        console.log(pos1)

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                showWinner(pos1);
                for(box of boxes)
                {
                    box.disabled = true;
                }
            }
        }
    }

}