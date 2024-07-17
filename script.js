let userscore =0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw Play again";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        // console.log("you wins!");
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = `You Win Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        // console.log("you lose");
        msg.innerText = `You lose ${userchoice} beats Your ${compchoice}`;
        msg.style.backgroundColor ="red"
    }
};

const playgame = (userchoice) =>{
    // console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice==compchoice)
    {
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false :true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});