'use strict';
/*
// 82. PROJECT #3: Pig Game
// when we're selecting using an ID. Then there's actually another way of selecting an element.
// And so in this case, we are making it really clear that this is a DOM element.

// Selecting elements
const score0El = document.querySelector('#score--0');
//  other way of selecting elements that only works by ID.
const score1El = document.getElementById('score--1');
// now we can just add that class to the dice at the beginning of the game. but first we need to select it.
const diceEl = document.querySelector('.dice');

// let's now set these initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
// Hide this dice here (creating a hidden class and then add that hidden class here at the beginning)
diceEl.classList.add('hidden');
*/
// 83. Rolling the Dice
/*
// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnКRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// let's now set these initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check fo rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice; // currentScore = currentScore + dice;
    document.getElementById('current--$(activePlayer)').textContent =
      currentScore; // but here we do instead select the score element dynamically based on which is the active player right now
    current0El.textContent = currentScore; // CHANGE LATER (So again, this 1 here will always set the text content on player number 0,)
  } else {
    // switch to next player
  }
});
*/
//
//
//
//
//
//
//
//
// 84. Switching the Active player
// Selecting elements
/*
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnКRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// let's now set these initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check fo rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice; // currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // here we do select the score element dynamically based on which is the active player right now
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    ///If we do that on both then it will work, because on player 0 it will remove the class if it's there and if it's not it will add it. The same thing on the other player.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
*/
// 85. Holding Current Score
/*
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// let's now set these initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check fo rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice; // currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // here we do select the score element dynamically based on which is the active player right now
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // or: scores[activePlayer] + currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      // Switch to next player. Code will be same but i will put it into a function
      switchPlayer();
    }
  }
});
*/

//
//
//
//
//

// 86. Resetting the Game

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

let scores, currentScore, activePlayer, playing; // now, these variables, they basically live outside here.
// Starting let's now set these initial conditions
// And this is once again just the initializing function that serves as a reusable piece of code,so we need no arguments here.
// when do we want this function here to be executed? So whenever we load the page for the very first time or also when that button is clicked that we were just working on?
const init = function () {
  // these variables that are defined here, they're only available inside of this init function So we say that they are scoped to this init function, because this is where I declared them. And so the solution is to declare these variables outside of any function but without any value (thats why we use let).
  scores = [0, 0]; //what we do here then is to essentially reassign them a value
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //
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
// Our initial variables here are not set, because this function does not run on its own. the solution to that is to simply run it function init().
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check fo rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice; // currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // here we do select the score element dynamically based on which is the active player right now
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // or: scores[activePlayer] + currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
    } else {
      // Switch to next player. Code will be same but i will put it into a function
      switchPlayer();
    }
  }
});

// we also need to use this init function, of course, on the reload function. So on this event handler here. And so, just like before, here, we now do not declare this anonymous function, but instead, we pass in the init function, which again is really just a value. And just keep in mind that we do not call this function here. It is JavaScript who will call the init function as soon as the user clicks on the new button.
btnNew.addEventListener('click', init);
// So we changed classes here and we manipulated the content. But of course, we also need to set our internal state variables back to the initial state. Instead, we will create a function which contains this code, together with the code that is already down here, okay? And then we will create a new function with all of these.And I'm gonna call this function init, which stands for initialization.
// let = scores = [0, 0];
// let = currentScore = 0;
// let = activePlayer = 0;
// let = playing = true;

// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;

// diceEl.classList.add('hidden');
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');

// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');
