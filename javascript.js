


function getComputerChoice(){

    let ran_number = (Math.round(Math.random() *10)) % 3;

    switch (ran_number){
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }

}

alert(getComputerChoice());


function getHumanChoice(){
    let do_again = false;
    let input_user;
    do{
        input_user = prompt("Choose: \nRock = 1\nPaper = 2 \nScissors = 3");

        do_again = false;
        
        if(isNaN(input_user) || (input_user < 1) || (input_user > 3)){
            console.log("Invalid input, try again");
            do_again = true;
        }
    
    }while(do_again);

    return input_user;
}

console.log(getHumanChoice());