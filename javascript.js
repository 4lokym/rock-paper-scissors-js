let human_score = 0;
let computer_score = 0;

function getComputerChoice(){

    let ran_number = (Math.round(Math.random() *10)) % 3;
    return ++ran_number;
}

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

function fromNumToWord(number){
    switch (number){
        case 1:
        return "Rock";
        case 2:
        return "Paper";
        case 3:
        return "Scissors";
    }
}
 

function playRound(human_choice, computer_choice){

    console.log(`You choosed ${fromNumToWord(human_choice)}, the computer choosed ${fromNumToWord(computer_choice)}`)
    
    if(human_choice < computer_choice || human_choice === 3 && computer_choice === 1){
        console.log("You loose");
    }else if(human_choice === computer_choice){
        console.log("Draw");
    }else{
        console.log("You win!!!");
    }
}