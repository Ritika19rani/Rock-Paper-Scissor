let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
   const options=["rock","paper","scissor"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Game Draw Play Again";
    msg.style.backgroundColor="pink";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost!${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
   const compChoice=genCompChoice();
   if(compChoice==userChoice){
    drawGame();
   }else{
     let userWin=true;
     if(userChoice=="rock"){
        if(compChoice=="paper"){
            userWin=false;
        }else{
            userWin=true;
        }
     }else if(userChoice=="paper"){
        if(compChoice=="rock"){
            userWin=true;
        }else{
            userWin=false;
        }
     }else{
        if(compChoice=="paper"){
            userWin=true;
        }else{
            userWin=false;
        }
     }
     showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});