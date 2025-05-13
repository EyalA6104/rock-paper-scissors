function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function getHumanChoice() {
    return prompt('Choose Rock, Paper or Scissors')
}

function playGame() {
 let humanScore = 0;
 let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! both chose ${humanChoice}`)
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) { 
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`)
    } else {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`)
    }
    console.log(`Human score: ${humanScore} | Computer score: ${computerScore}`)
 }

 for (let index = 0; index < 5; index++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
 }
 console.log("Game Over!");
 console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame()



