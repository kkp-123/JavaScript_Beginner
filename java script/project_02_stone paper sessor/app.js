let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector('#user-score');
let comScorePara = document.querySelector('#com-score');

const genComChoice = ()=>{
    let options = ['rock','paper','scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = ()=>{
    msg.innerText = "Game was draw. Play again ";
    console.log("Game was draw");
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        console.log("You win");
    }
    else{
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor = "red";
        console.log("You lose");
    }

}
const playgame = (userChoice)=>{

    console.log("user choice = ", userChoice);
    const comChoice = genComChoice();
    console.log("Computer choice = ", comChoice);
    if(userChoice == comChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock")
        {
            userWin = comChoice === "paper"?false:true;

        }
        else if(userChoice === "paper")
        {
            userWin = comChoice === "scissor"?false:true;
        }
        else{
            userWin = comChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        // console.log("choice was click");
        // console.log(userChoice);
        playgame(userChoice);
    })
})