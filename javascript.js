let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    let getIndex = array[Math.floor(Math.random() * (3 - 0) + 0)];
    
    return getIndex;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Paper beats Rock!")
        
        return computerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Rock beats Scissors!")
        
        return playerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        let playerInput = prompt("Tie Break!");
        let playerSelection = fixInput(playerInput);
        let computerSelection = getComputerChoice();
        
        return round(playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Paper beats Rock!")
        
        return playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Scissors beats Paper!");
        
        return computerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        let playerInput = prompt("Tie Break!");
        let playerSelection = fixInput(playerInput);
        let computerSelection = getComputerChoice();
        
        return round(playerSelection, computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Rock beats Scissors!");
        
        return computerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Scissors beats Paper!")
        
        return playerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        let playerInput = prompt("Tie Break!");
        let playerSelection = fixInput(playerInput);
        let computerSelection = getComputerChoice();
        
        return round(playerSelection, computerSelection);
    }
}

function fixInput(input) {
    if (input) {
      return input = input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
    } else {
        return input = "Invalid Choice!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Rock, Paper or Scissors?");
        let playerSelection = fixInput(playerInput);
        let computerSelection = getComputerChoice();
        round(playerSelection, computerSelection);
    }
    console.log(`Your score is ${playerScore}`);
    console.log(`The Computer's score is ${computerScore}`);
    playerScore > computerScore ? console.log("You Win!") : console.log("Computer Wins!");
}

game();

// play a best-of-five game
// keep score
// report a winner or loser at the end

