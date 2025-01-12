//a function that choses the computer's choise

function getComputerChoice(){
    let ran_number = Math.round(Math.random() *10);

    switch (ran_number % 3){
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }

}

alert(getComputerChoice());


