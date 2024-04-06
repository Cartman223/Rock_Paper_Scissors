// initializes variables to store the player and computer scores
let playerScore = 0;
let computerScore = 0;

// get reference to HTML elements
let yourChoice = document.querySelector('#yourChoice');
let computerChoice = document.querySelector('#computerChoice');
let pScore = document.querySelector('#playerScore');
let cScore = document.querySelector('#computerScore');
let rWinner = document.querySelector('#rWinner');
let gWinner = document.querySelector('#gWinner');

// display the score
let yourScore = document.createElement('span');
yourScore.innerHTML = 0;
pScore.appendChild(yourScore);
let opponentScore = document.createElement('span');
opponentScore.innerHTML = 0;
cScore.appendChild(opponentScore);

// function for random selection of either Rock Paper or Scissors
function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    let getIndex = array[Math.floor(Math.random() * (3 - 0) + 0)];
    
    return getIndex;
}

// function for creating elements in the DOM
function mkElement(parentElement, childElement) {
    let a = document.createElement(childElement);
    let b = document.querySelector(parentElement);
    b.appendChild(a);
}


// compares player vs computer decision and announces the winner as well as the choices made
function round(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Paper beats Rock!");
        
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;
        
        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You lose! Paper beats Rock!';
        
        return ++computerScore;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Rock beats Scissors!");

        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;
        
        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You win! Rock beats Scissors!';
        
        return ++playerScore;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;
        
        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'Its a tie! Try again!';
        
        return;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Paper beats Rock!");
        
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;

        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You win! Paper beats Rock!';

        return ++playerScore;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Scissors beats Paper!");
        
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;

        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You lose! Scissors beats Paper!';

        return ++computerScore;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;
        
        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'Its a tie! Try again!';
        
        return;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You lose! Rock beats Scissors!");
        
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;

        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You lose! Rock beats Scissors!';

        return ++computerScore;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Player's choice was: " + playerSelection);
        console.log("Computer's choice was: " + computerSelection);
        console.log("You win! Scissors beats Paper!");
        
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;

        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'You win! Scissors beats Paper!';

        return ++playerScore;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        mkElement('#yourChoice', 'span');
        yourChoice.lastChild.textContent = `${playerSelection}! `;
        mkElement('#computerChoice', 'span');
        computerChoice.lastChild.textContent = `${computerSelection}! `;
        
        mkElement('#rWinner', 'span');
        rWinner.lastChild.innerText = 'Its a tie! Try again!';

        return;
    }
}

// append event listener to the three buttons
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        //checks player and computer choice fields for text then deletes the text if it has any
        if (yourChoice.lastChild.innerText) {yourChoice.lastChild.innerText = ""};
        if (computerChoice.lastChild.innerText) {computerChoice.lastChild.innerText = ""};
        //checks round winner for text, deletes text if it finds any
        if (rWinner.lastChild.innerText) {rWinner.lastChild.innerText = ''};
        round(e.target.textContent, getComputerChoice());
        // update the score
        yourScore.innerHTML = playerScore;
        opponentScore.innerHTML = computerScore;
        // check for game winner
        if (gWinner.lastChild.innerText && playerScore < 5 || computerScore < 5) {
            gWinner.lastChild.innerText = "";
        }
        if (playerScore >= 5) {
            gWinner.appendChild(document.createElement('span'));
            gWinner.lastChild.innerText = 'You have won the game!';
            playerScore = 0;
            computerScore = 0;
        }
        if (computerScore >= 5) {
            gWinner.appendChild(document.createElement('span'));
            gWinner.lastChild.innerText = 'The Computer has won the game!';
            computerScore = 0;
            playerScore = 0;
        }
    })
})











// append event listener to a single button
// let rock = document.querySelector('.btn');
// rock.addEventListener('click', (e) => {
//     round(e.target.textContent, 'Paper');
// })



// plays a single round, conditionaly checking the player's input choice against the computer's random choice
// the result of each round is logged in the console
// player scores get updated here!

// function fixInput(input) {
//     if (input) {
//       return input = input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
//     } else {
//         return input = "Invalid Choice!";
//     }
// }
// makes the player input case insensitive by manipulating the string

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerInput = prompt("Rock, Paper or Scissors?");
//         let playerSelection = fixInput(playerInput);
//         let computerSelection = getComputerChoice();
//         round(playerSelection, computerSelection);
//     }
//     console.log(`Your score is ${playerScore}`);
//     console.log(`The Computer's score is ${computerScore}`);
//     playerScore > computerScore ? console.log("You Win!") : console.log("Computer Wins!");
// }
// loops over the round() function five times

// game();


