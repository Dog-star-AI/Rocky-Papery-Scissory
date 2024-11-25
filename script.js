//functions
function getRand(max){
    return Math.floor(Math.random()*max);//generates a random number
}
function gethuman(val){
    if(val === 'rock'){
        return 0;
    }else if(val === 'paper'){
        return 1;
    }else{
        return 2;
    }
}
function getwinner(human, bot){
    /*
    logic
    0 is tie
    1 is 
    */
    if(human === bot){
        return "Draw";
    }else if(human === 0 && bot === 1){
        return "Bot Wins!!!";
    }else if(human === 0 && bot === 2){
        return "You Win!!!";
    }else if(human === 1 && bot === 0){
        return " You Win!!!";
    }else if(human === 1 && bot ===2){
        return "Bot Wins!!!";
    }else if(human === 2 && bot == 0){
        return "Bot Wins!!!" ;
    }else {
        return "You Win!!!";
    }
}
// Get user input
let user_input = window.prompt('Rock, Paper, or Scissors?').toLowerCase();
let human = gethuman(user_input);

//get bot input
let bot = getRand(3);

//check who won
/*
Game Logic
rock(0) < paper(1)
paper(1) < scissors(2)
rock(0) > scissors(2)
*/

//show the winner
console.log(getwinner(human, bot));