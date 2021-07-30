'use strict';
// console.log( document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = "12";
// document.querySelector('.score').textContent = '18';
// document.querySelector(".highscore").textContent = "16";

// document.querySelector('.guess').value = "9";
//  console.log( document.querySelector('.guess').value = "9");


//  add addEventListener to check button
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
// console.log(secretNumber)


document.querySelector('.check').addEventListener("click",function(){
    const guess = Number( document.querySelector('.guess').value);
    // console.log(guess)
    if(!guess){
        document.querySelector(".message").textContent="⛔Not a number";
    }else if(guess===secretNumber){
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('.message').textContent="Correct Number"
        document.querySelector('body').style.backgroundColor=("green")
        document.querySelector(".number").style.width = ("30rem")
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Too High"
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent="you Lose The game"
        }

        
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="Too low"
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="You lose the game"
        }
    
    }
})

/////Here is again button and add a addEventListenear.
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    let higscore = 0;
    let secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent="?"
    document.querySelector('.message').textContent="Start Guessing......."
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = higscore;
    document.querySelector('.guess').value= " ";
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector(".number").style.width ="15rem"

})