'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎈 Correct Number!';
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Ternary Example
// document.querySelector('.message').textContent =
// guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

let winningNumber = Math.trunc(Math.random()*20 ) + 1;
let score = 20;
let highScore = 0;

console.log(winningNumber);

document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if ( score > 1 ) {
            if ( !guess ) {
                changeMessage('invalid');
            } else if ( guess === winningNumber ) {
                changeMessage('winner');
                changeScore('increment');
                document.querySelector('.number').textContent = winningNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                if( score > highScore ) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }
                document.querySelector('.check').setAttribute("disabled", true);
            } else if ( guess > winningNumber ) {
                changeMessage('high');
                changeScore('decrement');
            } else {
                changeMessage('low');
                changeScore('decrement');
            }
        }
        else {
            changeMessage('lost');
            changeScore('setzero');
        }
    });

document.querySelector('.again').addEventListener(
    'click',
    function() {
        winningNumber = Math.trunc(Math.random()*20 ) + 1;
        changeScore('reset');
        changeMessage('reset');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.check').removeAttribute("disabled");
    }
);

function changeScore( status ) {
    const scoreStatus = status.toLowerCase();
    switch( scoreStatus ) {
        case 'increment':
            score++;
            break;
        case 'decrement':
            score--;
            break;
        case 'setzero':
            score = 0;
            break;
        case 'reset':
            score = 20;
            break;
        default:
            break;
    }
    document.querySelector('.score').textContent = score.toString();
}

function changeMessage( status ) {
    const guessStatus = status.toLowerCase();
    let message = '';
    switch ( guessStatus ) {
        case 'winner':
            message = 'You win!';
            break;
        case 'low':
            message = "Too freakin' low!";
            break;
        case 'high':
            message = 'Too damn high!';
            break;
        case 'lost':
            message = "You've lost the game";
            break;
        case 'invalid':
            message = 'Please enter a valid number';
            break;
        case 'reset':
            message = 'Start guessing...';
            break;
        default:
            break;
    }
    document.querySelector('.message').textContent = message;
}