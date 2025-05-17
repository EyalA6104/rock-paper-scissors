function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function getHumanChoice() {
    return prompt('Choose Rock, Paper or Scissors')
}

/* function playGame() {*/
 const body = document.querySelector("body");

const paperBtn = document.createElement("button");
const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

paperBtn.textContent = ("Paper");
rockBtn.textContent = ("Rock");
scissorsBtn.textContent = ("scissors");

body.appendChild(paperBtn);
body.appendChild(rockBtn);
body.appendChild(scissorsBtn);

const result = document.createElement("div");
body.appendChild(result);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        //console.log(`It's a tie! both chose ${humanChoice}`);
        const msgTie = document.createElement("div");
        msgTie.textContent = `It's a tie! both chose ${humanChoice}`
        body.appendChild(msgTie)

    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) { 
        humanScore++;
        //console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`)
        const msgHumanWin = document.createElement("div");
        msgHumanWin.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`
        body.appendChild(msgHumanWin)


    } else {
        computerScore++
        // console.log(`You lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
        const msgComputerWin = document.createElement("div");
        msgComputerWin.textContent = `You lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
        body.appendChild(msgComputerWin)

    }
    console.log(`Human score: ${humanScore} | Computer score: ${computerScore}`)

 //console.log("Game Over!");
 //console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

 result.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

 if (humanScore === 5 || computerScore === 5) {
    const winnerMsg = document.createElement("div");
    if (humanScore === 5){
        winnerMsg.textContent = "You won the game!";
    } else {
        winnerMsg.textContent = "Computer won the game!";
    };
    winnerMsg.style.fontWeight = "bold";
        winnerMsg.style.fontSize = "1.5rem";
        body.appendChild(winnerMsg);

        paperBtn.disabled = true;
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
 };

 /* for (let index = 0; index < 5; index++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
 }*/
 
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});




