let userscore = 0;
let compscore = 0;
let gameChoice = document.querySelectorAll('.game');
let message = document.querySelector('.game-status');
let userScorePara = document.querySelector('.user-score');
let compScorePara = document.querySelector('.comp-score');

let genCompChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randomindx = Math.floor(Math.random() * 3);
    return options[randomindx];
}

let drawGame = () => {
    console.log("game is draw");
    message.innerText = "Game is Draw, Play Again!";
}

let showWinner = (userWin) => {
    if(userWin){
        console.log("You Win!!");
        userscore ++;
        userScorePara.innerText = userscore;
        message.innerText = "You win the game!!";
    } else {
        console.log("You Lose.");
        compscore ++;
        compScorePara.innerText = compscore;
        message.innerText = "You lose the game!!";
    }
}

let playGame = (userChoice) => {
    console.log("user choice is = ", userChoice);
    // generate computer choice 
    let compChoice = genCompChoice();
    console.log("computer choice is = ", compChoice);

    if(userChoice === compChoice){
        // game draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false: true;
        } else if (userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin);
    }
}

gameChoice.forEach(choice => {
    console.log(choice);
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});