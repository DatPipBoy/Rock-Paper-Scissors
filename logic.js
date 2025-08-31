//global variables

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

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


console.log("Computer picks: " + computerChoice);

//Human logic

function getHumanChoice() {
choice = window.prompt("Rock, Paper or Scissors?");
choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

console.log("human picks: " + choice);
return choice;

}

//Comparison

function playround(){

    //Tie scenario

    if (computerChoice === humanChoice)  {
        return "Tie";
    }

    //Computer Wins scenario

    if (computerChoice === "Rock" && humanChoice === "Scissors")  {
        ++computerScore;
        return "Rock beats Scissors, computer wins!";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        ++computerScore;
        return "Paper beats Rock, computer wins!";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        ++computerScore;
        return "Scissors beats Paper, computer wins!";
    }

    //human Wins scenario

    if (computerChoice === "Scissors" && humanChoice === "Rock")  {
        ++humanScore;
        return "Rock beats Scissors, you win!";
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        ++humanScore;
        return "Paper beats Rock, you win!";
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        ++humanScore;
        return "Scissors beats Paper, you win!";
    }

} 

function proceed() {
    if  (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
            window.alert("Invalid");
        } else {
            console.log(playround());
            console.log("your score is: " + humanScore);
            console.log("Computer score is: " + computerScore);

    }
}


while (computerScore < 5 && humanScore < 5) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    proceed();
}

if (computerScore == 5) {
    window.alert("It must be the rise of the machines, computer wins!")
} else if (humanScore == 5) {
    window.alert("You showed those silly circuits who's boss! You win!")
}
