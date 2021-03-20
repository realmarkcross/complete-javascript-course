'use strict';

const btnNew = document.querySelector('.btn--new'); // new game
const btnRollDice = document.querySelector('.btn--roll'); // roll dice
const btnHold = document.querySelector('.btn--hold'); // hold and end turn

const dice = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Start new game
resetScores();
hideDice();
// Establish variables for round total, player scores
let roundTotal = 0;
let player0Score = 0;
let player1Score = 0;

btnRollDice.addEventListener(
    'click',
    function () {
        let rollAmt = getDiceRoll();
        showDice();
        if( rollAmt !== 1 ) {
            roundTotal += rollAmt;
            updateCurrent( roundTotal );
        }
        else {
            resetCurrent();
            changeActivePlayer();
        }
    }
);

btnHold.addEventListener(
    'click',
    function() {
        if (player0.classList.contains('player--active')) {
            document.querySelector('#score--0').textContent = updatedScore;
        } else {
            document.querySelector('#score--1').textContent = updatedScore;
        }
    }
);

function updateCurrent( roundTotal ) {
    player0.classList.contains( 'player--active' ) ?
        document.querySelector('#current--0').textContent = roundTotal :
        document.querySelector('#current--1').textContent = roundTotal;
}

function updateScore( roundTotal ) {

}

function changeActivePlayer() {
    if (player0.classList.contains('player--active')) {
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
    }
    else {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
}

function getDiceRoll() {
    let roll = Math.trunc(Math.random() * 6) + 1;
    switch( roll ) {
        case 1:
            dice.setAttribute('src', 'dice-1.png');
            return 1;
        case 2:
            dice.setAttribute('src', 'dice-2.png');
            return 2;
        case 3:
            dice.setAttribute('src', 'dice-3.png');
            return 3;
        case 4:
            dice.setAttribute('src', 'dice-4.png');
            return 4;
        case 5:
            dice.setAttribute('src', 'dice-5.png');
            return 5;
        case 6:
            dice.setAttribute('src', 'dice-6.png');
            return 6;
        default:
            break;
    }

}

function hideDice() {
    dice.style.display = 'none';
}

function showDice() {
    dice.style.display = 'block';
}

function resetCurrent() {
    player0.classList.contains( 'player--active' ) ?
        document.querySelector('#current--0').textContent = '0' :
        document.querySelector('#current--1').textContent = '0';
}

function resetScores() {
    document.querySelector('#score--0').textContent = '0';
    document.querySelector('#score--1').textContent = '0';
}