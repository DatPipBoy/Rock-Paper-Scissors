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

console.log(getComputerChoice());