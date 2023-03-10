'use strict';

// Пошук по id (id - це унікальний атрибут який може присвоюватись тегу, але його ім'я повинне бути унікальним)
// const elemsSeven = document.querySelectorAll('#listItem'); // в такому випадку ми отримаємо лише один об'єкт якщо він є на сторінці

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
// Initializing function
const init = function () {
  scores = [0, 0]; // big scores which accumulate
  currentScore = 0; // this can not be inside of this function because then it would be set to zero each time that we clicked the button
  activePlayer = 0; // Score of 1-st player is at index 0, 2-nd index 1 in array
  playing = true; // state variable, that hosts the state of the game

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // before switching set the current score back to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // then we want a new activePlayer to be 1
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to the current score
      // currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active players's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game

      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// 86. Resetting the game
// we also need to use this init function, of course, on the reload function. So on this event handler here. And so, just like before, here, we now do not declare this anonymous function, but instead, we pass in the init function, which again is really just a value. And just keep in mind that we do not call this function here. It is JavaScript who will call the init function as soon as the user clicks on the new button.
// So we changed classes here and we manipulated the content. But of course, we also need to set our internal state variables back to the initial state. Instead, we will create a function which contains this code, together with the code that is already down here, okay? And then we will create a new function with all of these.And I'm gonna call this function init, which stands for initialization.
