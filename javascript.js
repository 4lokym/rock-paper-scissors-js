let human_score = 0;
let computer_score = 0;
let round_played = 0;
const window_speak = document.querySelector("#speak-window");
const window_speak2 = document.querySelector("#speak-window2");

const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e) => {playOneRound(e)});

function playOneRound(event_input){
    
    let human_choice = fromWordtoNumber(event_input.target.id);

    //let human_choice = getHumanChoice();      

    let computer_choice = getComputerChoice();
    playRound(human_choice, computer_choice);

    printScore();
}

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

    return +input_user;
}

function fromWordtoNumber(word){
    switch (word){
        case "Rock":
        return 1;
        case "Paper":
        return 2;
        case "Scissors":
        return 3;
    }
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

    printWindow2(`You choosed ${fromNumToWord(human_choice)}, the computer choosed ${fromNumToWord(computer_choice)}`)
    
    if(human_choice === ((computer_choice+2) % 3)){
        printWindow2("You loose");
        computer_score++;
    }else if(human_choice === computer_choice){
        printWindow2("Draw");
    }else{
        printWindow2("You win!!!");
        human_score++;
    }
}

function printScore(){
    printWindow(`User score: ${human_score}, computer score: ${computer_score}`);
}

function printWindow(string){
    window_speak.textContent = string;
}

function printWindow2(string){
    window_speak2.textContent = string;
}