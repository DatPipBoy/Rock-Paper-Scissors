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

const computerChoice = getComputerChoice();

console.log("Computer picks: " + computerChoice);

//Human player logic

playerChoice = window.prompt("Rock, Paper or Scissors?");
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

console.log("Player picks: " + playerChoice);

//Comparison

function winner(){

    //Tie scenario

    if (computerChoice === playerChoice)  {
        return "Tie";
    }

    //Computer Wins scenario

    if (computerChoice === "Rock" && playerChoice === "Scissors")  {
        return "Rock beats Scissors, computer wins!";
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        return "Paper beats Rock, computer wins!";
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        return "Scissors beats Paper, computer wins!";
    }

    //Player Wins scenario

    if (computerChoice === "Scissors" && playerChoice === "Rock")  {
        return "Rock beats Scissors, you win!";
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        return "Paper beats Rock, you win!";
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        return "Scissors beats Paper, you win!";
    }

}

if  (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
    window.alert("Invalid");
} else {
    console.log(winner());
}