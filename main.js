let playerPick = 0;
let computerPick = 0;

let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore  < 5 && computerScore < 5) {
        let getPicks = () => {
            playerPick = prompt("1. Rock 2. Paper 3.Scissors");
            computerPick = Math.floor(Math.random() * 3) + 1;
        }
    
        getPicks();
    
        
        // player pics    
        if (playerPick == 1) {
            playerPick = "rock";
        }
        else if (playerPick == 2) {
            playerPick = "paper";
        }
        else if (playerPick == 3) {
            playerPick = "scissors";
        }
        // computer picks
        if (computerPick == 1) {
            computerPick = "rock";
        }
        else if (computerPick == 2) {
            computerPick = "paper";
        }
        else if (computerPick == 3) {
            computerPick = "scissors";
        }
        
        console.log("player picked: " + playerPick);
        console.log("computer picked: " + computerPick);
        
        // checking the winner
        if (playerPick == "rock" && computerPick == "scissors") {
            console.log("Player wins");
            playerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == "rock" && computerPick == "paper") {
            console.log("Computer wins");
            playerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == "paper" && computerPick == "scissors") {
            console.log("Computer wins");
            computerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == "paper" && computerPick == "rock") {
            console.log("Player wins");
            playerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == "scissors" && computerPick == "paper") {
            console.log("Player wins")
            playerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == "scissors" && computerPick == "rock") {
            console.log("Computer wins");
            computerScore++;
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }
        else if (playerPick == computerPick) {
            console.log("DRAW");
            console.log(`Player: ${playerScore} computer: ${computerScore}`);
        }

        
    }
    playerScore == 5 ? console.log("PLAYER WON") : console.log("COMPUTER WON");
    
    
}

game();






