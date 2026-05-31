let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const roundResult = playround(humanChoice);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log(roundResult);
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

        console.log("humanChoice: " + humanChoice);
        console.log("comptuerChoice: " + computerChoice);

        //Tie scenario

        if (computerChoice === humanChoice)  {
            return result = "Tie";
        }

        //Computer Wins scenario

        if (computerChoice === "Rock" && humanChoice === "Scissors")  {
            ++computerScore;
            return result = "Rock beats Scissors, computer wins!";
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            ++computerScore;
            return result = "Paper beats Rock, computer wins!";
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            ++computerScore;
            return result = "Scissors beats Paper, computer wins!";
        }

        //human Wins scenario

        if (computerChoice === "Scissors" && humanChoice === "Rock")  {
            ++humanScore;
            return result = "Rock beats Scissors, you win!";
        } else if (computerChoice === "Rock" && humanChoice === "Paper") {
            ++humanScore;
            return result = "Paper beats Rock, you win!";
        } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
            ++humanScore;
            return result = "Scissors beats Paper, you win!";
        }

    }