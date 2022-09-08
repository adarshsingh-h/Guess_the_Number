'use strict';

let randomNumber = Math.trunc(Math.random() * 19) + 1;
let highScore = document.querySelector('.highscore');
let score = document.querySelector('.score');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//Check button functionality
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //if not  a number
    if (! guess) {
        displayMessage('🆘No Number');
    } 
    //User wins the game
    else if (guess === randomNumber) {
        // document.querySelector('.message').textContent = 'Correct Number‼🥳';
        displayMessage('Correct Number‼🥳');
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //setting up highscore function
        if (Number(score.textContent) > Number(highScore.textContent)) 
            highScore.textContent = score.textContent;
        
    }
    //guessed number higher
    else if(guess !== randomNumber) {
        if (score.textContent > 0) {
            displayMessage(guess > randomNumber ? ('Too High‼🙄') : ('Too Low‼😶'));
            score.textContent -= 1;

        //user loses the game
        } else {
            document.querySelector('body').style.backgroundColor = 'red';
            displayMessage('You Lose!🥵🟥');
            
        }
    }
});
    
//Again button functionality
document.querySelector('.again').addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * 19) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});
