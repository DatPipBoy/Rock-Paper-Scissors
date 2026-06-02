//styling

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.type = "text/css";
stylesheet.href = "styles.css";

document.head.appendChild(stylesheet);

//global variables

let humanScoreValue = 0;
let humanScore = document.getElementById("humanScore");

let computerScoreValue = 0;
let computerScore = document.getElementById("computerScore");

const scores = document.createElement("div");
document.body.appendChild(scores);

let gameState = document.getElementById("gameState");
let outcome = document.getElementById("outcome");

let selections = document.createElement("h3");
selections.id = "selections";
gameState.appendChild(selections);

const buttons = document.querySelectorAll("button");


function additionalRound() {
    if (window.confirm("Play again?")) {
        humanScoreValue = 0;
        computerScoreValue = 0;
        humanScore.innerText = humanScoreValue;
        computerScore.innerText = computerScoreValue;
        selections.innerText = "";
    } else {
        window.alert("Thanks for playing!");
    }
}

//game logic

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const roundResult = playround(humanChoice);

        humanScore.innerText = humanScoreValue;
        computerScore.innerText = computerScoreValue;

        outcome.innerText = roundResult;

        if (computerScoreValue == 5) {
            window.alert("It must be the rise of the machines, computer wins!")
            additionalRound();
        } else if (humanScoreValue == 5) {
            window.alert("You showed those silly circuits who's boss! You win!")
            additionalRound();
        }
    });
});


function playround(humanChoice){  

    let computerChoice = getComputerChoice();
    let result ="";


//computer choice logic

function getComputerChoice() {
    const result = Math.random();

        if (result <= 0.33) {                   
            return "Rock";
        } else if (result >0.33 && result <= 0.66) {                   
            return "Paper"; 
        } else {                    
            return "Scissors";
        }
    }

    selections.textContent = "You picked " + humanChoice + 
                             ", Computer picked " + computerChoice + ".";

    

//Tie scenario

    if (computerChoice === humanChoice)  {
        return result = "Tie";
    }

//Computer Wins scenario

    if (computerChoice === "Rock" && humanChoice === "Scissors")  {
        ++computerScoreValue;
        return result = "Rock beats Scissors, computer wins!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        ++computerScoreValue;
        return result = "Paper beats Rock, computer wins!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        ++computerScoreValue;
        return result = "Scissors beats Paper, computer wins!";
    }

//human Wins scenario

    if (computerChoice === "Scissors" && humanChoice === "Rock")  {
        ++humanScoreValue;
        return result = "Rock beats Scissors, you win!";
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        ++humanScoreValue;
        return result = "Paper beats Rock, you win!";
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        ++humanScoreValue;
        return result = "Scissors beats Paper, you win!";
    }
 
}    