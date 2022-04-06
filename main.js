const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScoreSpan = document.querySelector('#player');
const computerScoreSpan = document.querySelector('#computer');
const text = document.querySelector('#text');

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    randomNumber = Math.floor(Math.random() * 3);
    computerPick = choices[randomNumber];
    console.log('Computer picked: ' + computerPick);
    return computerPick;
}

let getWinner = () => {
    if (playerScore == 5) {
        document.body.style.backgroundColor = 'green';
        text.innerHTML = 'Player won the game';
        rockBtn.style.pointerEvents = 'none';
        paperBtn.style.pointerEvents = 'none';
        scissorsBtn.style.pointerEvents = 'none';

    }
    else if (computerScore == 5) {
        document.body.style.backgroundColor = 'red';
        text.innerHTML = 'Comp won the game';
        rockBtn.style.pointerEvents = 'none';
        paperBtn.style.pointerEvents = 'none';
        scissorsBtn.style.pointerEvents = 'none';

    }
}

let checkRound = (P, COMP) => {
    switch (P + COMP) {
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('DRAW!!!');
            text.innerHTML = 'DRAW!!!';
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            text.innerHTML = 'Player wins!!!';
            playerScore++
            playerScoreSpan.innerHTML = playerScore;
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            text.innerHTML = 'COMP wins!!!';
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            break;
        }
        getWinner();
}

let game = (playerChoice) => {
    console.log('Player picked: ' + playerChoice);
    computerChoice = getComputerChoice();
    checkRound(playerChoice, computerChoice);
}

rockBtn.addEventListener('click', () => {
    game('r');    
});
paperBtn.addEventListener('click', () => {
    game('p');    
});
scissorsBtn.addEventListener('click', () => {
    game('s');    
});
















