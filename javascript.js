function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    let getIndex = array[Math.floor(Math.random() * (3 - 0) + 0)];
    return getIndex;
}

function round(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return round(playerSelection = prompt("Tie Break!"), computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return round(playerSelection = prompt("Tie Break!"), computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return round(playerSelection = prompt("Tie Break!"), computerSelection);
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();

console.log("Player's choice was: " + playerSelection);
console.log("Computer's choice was: " + computerSelection);
console.log(round(playerSelection, computerSelection));
