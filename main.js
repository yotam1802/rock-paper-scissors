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
            if (computerSelection == "Rock") return "It's a tie! Rock and rock.";
            else if (computerSelection == "Paper") return "You lose! Paper beats rock.";
            else if (computerSelection == "Scissors") return "You win! Rock beats scissors.";
            break;
        case "Paper":
            if (computerSelection == "Rock") return "You win! Paper beats rock.";
            else if (computerSelection == "Paper") return "It's a tie! Paper and paper.";
            else if (computerSelection == "Scissors") return "You lose! Scissors beats paper.";
            break;
        case "Scissors":
            if (computerSelection == "Rock") return "You lose! Rock beats scissors.";
            else if (computerSelection == "Paper") return "You win! Scissors beats paper.";
            else if (computerSelection == "Scissors") return "It's a tie! Scissors and scissors.";
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Please choose Rock, Paper, or Scissors");
playerSelection = fixCaseSensitivity(playerSelection);
let result = playRound(playerSelection, computerSelection);
console.log(result);

