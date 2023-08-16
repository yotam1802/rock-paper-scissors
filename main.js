function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function fixCaseSensitivity(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {
                console.log("It's a tie! Rock and rock.");
                return "None";
            }
            else if (computerSelection == "Paper") {
                console.log("You lose! Paper beats rock.");
                return "Computer";
            }
            else if (computerSelection == "Scissors") {
                console.log("You win! Rock beats scissors.");
                return "User";
            }
            break;
        case "Paper":
            if (computerSelection == "Rock") {
                console.log("You win! Paper beats rock.");
                return "User"
            }
            else if (computerSelection == "Paper") {
                console.log("It's a tie! Paper and paper.");
                return "None";
            }
            else if (computerSelection == "Scissors") {
                console.log("You lose! Scissors beats paper.");
                return "Computer";
            }
            break;
        case "Scissors":
            if (computerSelection == "Rock") {
                console.log("You lose! Rock beats scissors.");
                return "Computer";
            }
            else if (computerSelection == "Paper") {
                console.log("You win! Scissors beats paper.");
                return "User";
            }
            else if (computerSelection == "Scissors") {
                console.log("It's a tie! Scissors and scissors.");
                return "None";
            }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please choose Rock, Paper, or Scissors");
        playerSelection = fixCaseSensitivity(playerSelection);
        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "None":
                break;
            case "Computer":
                computerScore++;
                break;
            case "User":
                playerScore++;
                break;
        }
    }

    if (playerScore > computerScore) return `You win! ${playerScore}:${computerScore}`;
    else if (playerScore < computerScore) return `You lose! ${playerScore}:${computerScore}`;
    else return `The game was a tie! ${playerScore}:${computerScore}`;
}

console.log(game());


