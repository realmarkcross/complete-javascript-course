'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1'); // faster selection of ids
const current0El = document.getElementById('current--0'); // faster selection of ids
const current1El = document.getElementById('current--1'); // faster selection of ids
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;
function init() {
    scores = [0, 0]; // scores for both players
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

function switchPlayer() {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if ( playing ) {
        // Generate random dice roll.
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice.
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // Check for 1 on dice roll: if true switch to next player.
        if (dice !== 1) {
            // Add dice to current display
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if ( playing ) {
        // Add current to score of active player's main score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if player's score is >=100
        if ( scores[activePlayer] >= 10 ) {
            // Finish game
            playing = false;
            diceEl.classList.add('hidden');
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to next player if not
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);